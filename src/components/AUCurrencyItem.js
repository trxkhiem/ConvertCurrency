import React, { useState, useEffect } from "react";
import {
	StyleSheet,
	Text,
	View,
	TextInput,
	TouchableOpacity,
	Keyboard,
} from "react-native";

import CountryFlag from "./CountryFlag";
import Icon from "react-native-vector-icons/FontAwesome";
import EntypoIcons from "react-native-vector-icons/Entypo";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AUCountryCurrency = ({ onValueChange }) => {
	const [inputValue, setInputValue] = useState("");

	// when the user typing
	const handleInputChange = (value) => {
		setInputValue(value);
	};

	// when the user submit the number
	const handlePress = () => {
		onValueChange(inputValue);

		// Dismiss the keyboard
		Keyboard.dismiss();
	};

	const loadValue = async () => {
		// check if cache data exists
		const cacheData = await AsyncStorage.getItem("@exchangeRatesCache");
		const result = JSON.parse(cacheData);
		// check if there is cache data
		if (result) {
			// update value if there is
			setInputValue(result.currentValue);
			onValueChange(result.currentValue);
		} else {
			// initialise with 0
			onValueChange(0);
		}
	};

	//load the value when the component is rendered
	useEffect(() => {
		loadValue();
	}, []);

	return (
		<View style={styles.currencyItem}>
			{/* current view */}
			<View style={styles.leftView}>
				<CountryFlag countryCode="AUD" size={50} />
				<Text style={{ fontSize: 16, fontWeight: "bold" }}>AUD</Text>
				<EntypoIcons name="chevron-small-down" size={35} color="#D3D3D3" />
			</View>

			{/* value view */}
			<View style={styles.rightView}>
				<View style={styles.viewText}>
					<Text style={styles.valueText}>$</Text>
					<TextInput
						style={styles.valueText}
						value={inputValue}
						onChangeText={handleInputChange}
						placeholder="1000.00"
						keyboardType="numeric"
					/>
				</View>

				{/* empty box  */}
				<TouchableOpacity onPress={handlePress}>
					<View style={styles.line}>
						<EntypoIcons name="calculator" size={30} color="#D3D3D3" />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	currencyItem: {
		justifyContent: "space-between",
		flexDirection: "row",
		marginVertical: 50,
		marginHorizontal: 16,
		backgroundColor: "#ffffff",
		borderRadius: 10,
		elevation: 5, // Set the elevation to 5
		shadowColor: "#000000",
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.2,
		shadowRadius: 2,
		borderWidth: 1,
		borderColor: "#D3D3D3",
		height: 65,
	},

	leftView: {
		marginLeft: 18,
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
	},

	rightView: {
		justifyContent: "center",
		flexDirection: "row",
	},

	viewText: {
		justifyContent: "center",
		flexDirection: "row",
		alignItems: "center",
	},

	valueText: {
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 16,
		marginHorizontal: 2,
	},

	// to create a line
	line: {
		borderLeftWidth: 1,
		marginRight: 0,
		marginLeft: 10,
		borderColor: "#D3D3D3",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
		width: 50,
	},
});

export default AUCountryCurrency;
