import { useState } from "react";

export default function StockForm({ onSearch }) {
  const [symbol, setSymbol] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (symbol.trim()) {
      onSearch(symbol.toUpperCase());
      setSymbol("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      <input
        type="text"
        value={symbol}
        onChange={(e) => setSymbol(e.target.value)}
        placeholder="Enter stock symbol (e.g., AAPL)"
        className="p-2 border rounded"
      />
      <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
        Add
      </button>
    </form>
  );
}
