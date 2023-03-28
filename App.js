import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	ActivityIndicator,
	FlatList,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import AUCountryCurrency from "./src/components/AUCurrencyItem";
import CurrencyItem from "./src/components/CurrencyItem";
import { getExchangeRates } from "./src/services/APIService";
import { ITEMS } from "./src/utils/Constants";

export default function App() {
	const [exchangeRates, setExchangeRates] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [value, setValue] = useState("0");

	var currencyList = ITEMS;

	// the function is triggered generate convert rate
	const handleValueChange = (newValue) => {
		setValue(newValue);
		fetchExchangeRates(newValue);
	};

	// the function to call the api service to retrive data
	const fetchExchangeRates = async (newValue) => {
		try {
			const response = await getExchangeRates();
			currencyList.forEach((currency) => {
				currency.convertRate = response[currency.countryCode];
			});
			// update value
			setExchangeRates(currencyList);
			console.log("Loaded exchange rates from API");
			// create cache data
			const cacheData = {
				currentValue: newValue,
				changeRates: currencyList,
			};
			// store exchange rates in cache
			await AsyncStorage.setItem(
				"@exchangeRatesCache",
				JSON.stringify(cacheData)
			);
		} catch (e) {
			console.log("error: " + e.message);
		}
	};

	// function to decide whether to get data from cache or call api
	const loadExchangeRates = async () => {
		try {
			// check if cache data exists
			const cacheData = await AsyncStorage.getItem("@exchangeRatesCache");
			const result = JSON.parse(cacheData);
			if (result) {
				// data exist then display them
				setExchangeRates(result.changeRates);
				setValue(result.currentValue);
				console.log("Loaded exchange rates from cache");
				return;
			}
			// otherwise, fetch new exchange rates
			fetchExchangeRates();
		} catch (e) {
			setError(e.message);
		} finally {
			setLoading(false);
		}
	};

	// call the function when render
	useEffect(() => {
		loadExchangeRates();
	}, []);

	// loading during api call
	if (loading) {
		return (
			<View style={styles.loading}>
				<ActivityIndicator style={styles.spinner} />
			</View>
		);
	}

	// display error
	if (error) {
		return <Text  style={styles.errorMsg}>{error}</Text>;
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* // Header */}
			<View style={styles.viewHeader}>
				<Text style={styles.textHeader}> Convert</Text>
			</View>

			{/* Body View */}
			<View>
				{/* AUD container view   */}
				<AUCountryCurrency onValueChange={handleValueChange} />

				{/* List of predefined currency items  */}
				<FlatList
					data={currencyList}
					renderItem={({ item }) => <CurrencyItem item={item} value={value} />}
					keyExtractor={(item) => item.countryCode}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	// loading style
	loading: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	spinner: {
		borderWidth: 4,
		borderColor: "#f3f3f3",
		borderTopColor: "#3498db",
		borderRadius: 50,
		width: 20,
		height: 20,
		animationName: "spin",
		animationDuration: "2s",
		animationTimingFunction: "linear",
		animationIterationCount: "infinite",
	},
	"@keyframes spin": {
		"0%": { transform: [{ rotate: "0deg" }] },
		"100%": { transform: [{ rotate: "360deg" }] },
	},

  // error message
  errorMsg:{
    justifyContent: "center",
		alignItems: "center",
    fontSize: 16,
    color: "red"
  },

	// whole screen css
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "stretch",
		justifyContent: "flex-start",
		flexDirection: "column",
	},

	// header css
	viewHeader: {
		backgroundColor: "#ffffff",
		alignItems: "center",
		paddingVertical: 16,
		// Set up elevation for header
		elevation: 3, // Set the elevation to 1
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 1,
	},

	textHeader: {
		fontSize: 18,
		fontWeight: "600",
		color: "#333333",
	},
});
