function StockList({ stocks }) {
  return (
    <div className="stock-list">
      {stocks.map((stock) => (
        <div key={stock.symbol} className="stock-card">
          <h3>{stock.name} ({stock.symbol})</h3>
          <p>Price: ${stock.price}</p>
          <p>Change: {stock.change} ({stock.changesPercentage}%)</p>
        </div>
      ))}
    </div>
  );
}

export default StockList;