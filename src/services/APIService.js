const API_URL = "https://openexchangerates.org/api";
const API_KEY = "1bb5dce3ebb4a76965829158659ba30";

export const getExchangeRates = async () => {
  const url = `${API_URL}/latest.json?app_id=${API_KEY}&base=AUD&symbols=USD,EUR,CHF,CAD,SGD`;

  try {
    // const response = await fetch(url);
    // const json = await response.json();
    // return json.rates;
    return {
      "CAD": 0.909928,
      "CHF": 0.608834,
      "EUR": 0.61592,
      "SGD": 0.884873,
      "USD": 0.663531,
    };
  } catch (error) {
    console.error("Error fetching exchange rates: ", error);
    return null;
  }
};
