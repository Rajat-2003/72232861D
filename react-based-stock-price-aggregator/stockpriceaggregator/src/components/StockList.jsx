export default function StockList({ stocks }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {stocks.map((stock) => (
        <div key={stock.symbol} className="p-4 border rounded shadow">
          <h2 className="text-lg font-bold">{stock.name || stock.symbol}</h2>
          <p>Price: ${stock.price}</p>
          <p>Change: {stock.change} ({stock.changesPercentage}%)</p>
        </div>
      ))}
    </div>
  );
}
