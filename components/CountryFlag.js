import React from 'react';
import { Image, StyleSheet, View } from 'react-native';


const CountryFlag = ({ countryCode, size }) => {
  // the URL of the flag image using the countryCode prop
  const flagImageUrl = `../assets/${countryCode}.png`;

  return (
    <Image source= {require('../assets/AUD.png')} style={styles.flagImage} />
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
