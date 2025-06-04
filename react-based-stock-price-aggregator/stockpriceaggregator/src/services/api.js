import axios from 'axios';

const API_KEY = import.meta.env.VITE_STOCK_API_KEY;

const BASE_URL = "https://financialmodelingprep.com/api/v3";

export const getStockQuote = async (symbol) => {
  try {
    const response = await axios.get(`${BASE_URL}/quote/${symbol}?apikey=${API_KEY}`);
    return response.data[0];
  } catch (error) {
    throw new Error("Failed to fetch stock data");
  }
};
