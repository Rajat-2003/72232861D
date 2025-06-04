import { useState } from "react";
import StockForm from "./components/StockForm";
import StockList from "./components/StockList";
import { getStockQuote } from "./services/api";
import './App.css';

function App() {
  const [stocks, setStocks] = useState([]);

  const addStock = async (symbol) => {
    try {
      const stock = await getStockQuote(symbol);
      setStocks((prev) => [...prev, stock]);
    } catch (err) {
      alert(`Error fetching data for ${symbol}`);
    }
  };

  return (
    <div className="container">
      <h1>📈 Stock Aggregator</h1>
      <StockForm onSearch={addStock} />
      <StockList stocks={stocks} />
    </div>
  );
}

export default App;
