// initial data
export const ITEMS = [
    { countryCode: 'SGD', convertRate: 1.0, currencyUnit: '$' },
    { countryCode: 'USD', convertRate: 1.0, currencyUnit: '$' },
    { countryCode: 'CHF', convertRate: 1.0, currencyUnit: '₣' },
    { countryCode: 'CAD', convertRate: 1.0, currencyUnit: '$' },
    { countryCode: 'EUR', convertRate: 1.0, currencyUnit: '€' },
  ];

export const COUNTRY_FLAG_IMAGES = {
    USD: require("../../assets/USD.png"),
    SGD: require("../../assets/SGD.png"),
    CAD: require("../../assets/CAD.png"),
    EUR: require("../../assets/EUR.png"),
    AUD: require("../../assets/AUD.png"),
    CHF: require("../../assets/CHF.png"),
    // add more entries for other countries
  };

export const API_URL = "https://openexchangerates.org/api";

export const API_KEY = "";