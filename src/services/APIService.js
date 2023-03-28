import { API_URL, API_KEY } from "../utils/Constants";



export const getExchangeRates = async () => {
	const url = `${API_URL}/latest.json?app_id=${API_KEY}&base=AUD&symbols=USD,EUR,CHF,CAD,SGD`;

	try {
    // call and return the api
		const response = await fetch(url);
		const json = await response.json();
		return json.rates;
	} catch (error) {
		console.error("Error fetching exchange rates: ", error);
		return null;
	}
};
