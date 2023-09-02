// services/CurrencyService.js

import axios from 'axios';

const apiUrl = 'https://api.coindesk.com/v1/bpi/currentprice.json';

export const getCurrencyData = async () => {
  try {
    const response = await axios.get(apiUrl);
    return response.data.bpi;
  } catch (error) {
    console.error('Error fetching currency data:', error);
    throw error;
  }
};
