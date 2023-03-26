import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


const CountryFlag = ({ countryCode, size }) => {
  // the URL of the flag image using the countryCode prop
  const flagImageString = '../assets/'+ countryCode+'.png';
  // select the correct image based on the countryCode prop
  let flagImagePath;
  switch (countryCode) {
    case 'USD':
      flagImagePath = require('../assets/USD.png');
      break;
    case 'GPB':
      flagImagePath = require('../assets/GPB.png');
      break;
    case 'CAD':
      flagImagePath = require('../assets/CAD.png');
      break;
    case 'EUR':
      flagImagePath = require('../assets/EUR.png');
      break;
    case 'AUD':
      flagImagePath = require('../assets/AUD.png');
      break;
    case 'VND':
      flagImagePath = require('../assets/VND.png');
      break;
    // add more cases for other countries
    default:
      flagImagePath = require('../assets/AUD.png');
      break;
  }
  return (
    <Image source={flagImagePath} style={styles.flagImage} />
  );
};

// Define styles for the components
const styles = StyleSheet.create({
  // Style the Image component to fill the circle
  flagImage: {
    width: 30,
    height: 30,
    marginRight: 10
  },
});

export default CountryFlag;
