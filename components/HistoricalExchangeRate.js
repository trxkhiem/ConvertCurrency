import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';
const HistoricalExchangeRate = () => {
  const [exchangeRates, setExchangeRates] = useState([]);

  // Fetch exchange rate data using Open Exchange Rates API when component mounts
  useEffect(() => {
    const fetchExchangeRates = async () => {
      const API_KEY = '364d8be3c45e48d19038de3dac96e4a5';
      const BASE_URL = 'https://openexchangerates.org/api';
      const response = await fetch(`${BASE_URL}/historical/2023-03-12.json?app_id=${API_KEY}&symbols=USD`);
      const data = await response.json();
      // Map exchange rate data to array of objects with date and rate properties
      const rates = Object.entries(data.rates).map(([date, rate]) => ({ date, rate }));
      // Set exchangeRates state variable to fetched exchange rate data
      setExchangeRates(rates);
    };

    fetchExchangeRates();
  }, []);

  // Render line chart using exchange rate data
  return (
    <LineChart
      // Configure chart data and options
      data={{
        labels: exchangeRates.map(rate => rate.date),
        datasets: [
          {
            data: exchangeRates.map(rate => rate.rate),
          },
        ],
      }}
      width={Dimensions.get('window').width} // Set chart width to window width
      height={220}
      yAxisLabel="$" // Set y-axis label
      yAxisSuffix="USD" // Set y-axis unit suffix
      chartConfig={{
        backgroundColor: '#e26a00',
        backgroundGradientFrom: '#fb8c00',
        backgroundGradientTo: '#ffa726',
        decimalPlaces: 2, // Set number of decimal places for y-axis values
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Set chart color
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`, // Set label color
        style: {
          borderRadius: 16, // Set chart border radius
        },
        propsForDots: {
          r: '6',
          strokeWidth: '2',
          stroke: '#ffa726',
        },
      }}
      bezier // Enable bezier smoothing for line chart
      style={{
        marginVertical: 8,
        borderRadius: 16,
      }}
    />
  );
};

export default HistoricalExchangeRate;
