import React, { useState, useEffect, createContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, FlatList, AsyncStorage } from 'react-native';
import AUCountryCurrency from './src/components/AUCurrencyItem';
import CurrencyItem from './src/components/CurrencyItem';
import { getExchangeRates } from './src/services/APIService';
import {ITEMS} from './src/utils/Constants'


export const ExchangeRatesContext = createContext();

export default function App() {
  
  const [exchangeRates, setExchangeRates] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [value, setValue] = useState('');

  var currencyList = ITEMS

  const handleValueChange = (newValue) => {
    setValue(newValue);
    loadExchangeRates();
  };


  const loadExchangeRates = async () => {
    try {
      console.log("call the function");
      const response = await getExchangeRates();
      
      currencyList.forEach((currency) => {
        currency.convertRate = response[currency.countryCode]
      });
      setExchangeRates(currencyList);
      console.log(currencyList);
      console.log(value)
       
      // Store the exchange rates in the context API for caching
      ExchangeRatesContext.exchangeRates = currencyList;
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setValue(0);
    // Check if exchange rates are available in the context API
    if (ExchangeRatesContext.exchangeRates) {
      setExchangeRates(ExchangeRatesContext.exchangeRates);
      setLoading(false);
    } else {
      loadExchangeRates();
    }  
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* // Header */}
      <View style={styles.viewHeader}>
        <Text style={styles.textHeader}> Convert</Text>
      </View>

      {/* Body View */}
      <View >
        {/* AUD container view   */}
        <AUCountryCurrency onValueChange={handleValueChange} /> 

        {/* List of predefined currency items  */}
        <FlatList
          data={currencyList}
          renderItem={({ item }) => <CurrencyItem item={item} value = {value} />}
          keyExtractor={(item) => item.countryCode}
        />
      </View>
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    
  },
  viewHeader: {
    backgroundColor: '#ffffff',
    alignItems: "center",
    paddingVertical: 16,
    // Set up elevation for header
    elevation: 3, // Set the elevation to 1
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },

  textHeader: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },


});
