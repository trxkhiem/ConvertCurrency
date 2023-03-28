import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { COUNTRY_FLAG_IMAGES } from "../utils/Constants";

const CountryFlag = ({ countryCode, size }) => {
	const flagImagePath = COUNTRY_FLAG_IMAGES[countryCode] || COUNTRY_FLAG_IMAGES.AUD;
	return <Image source={flagImagePath} style={styles.flagImage} />;
};


const styles = StyleSheet.create({
	// Style the Image component to fill the circle
	flagImage: {
		width: 30,
		height: 30,
		marginRight: 10,
	},
});

export default CountryFlag;
