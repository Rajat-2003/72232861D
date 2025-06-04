import { useState } from "react";
import StockForm from "./components/StockForm";
import StockList from "./components/StockList";
import { getStockQuote } from "./services/api";

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
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">📈 Stock Aggregator</h1>
      <StockForm onSearch={addStock} />
      <StockList stocks={stocks} />
    </div>
  );
}

export default App;
