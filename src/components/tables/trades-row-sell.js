import React from "react";

const TradesRowSell = ({
  date,
  symbol,
  Close,
  tradePriceGain,
  tradePriceGainPercent,
  netProfit,
  index
}) => (
  <tr key={index}>
    <td>
      <span className="trades-row-sell">Sell</span>
    </td>
    <td>{date}</td>
    <td>{symbol}</td>
    <td />
    <td>{Close}</td>
    <td>{tradePriceGain}</td>
    <td>{tradePriceGain} %</td>
    <td>{netProfit}</td>
  </tr>
);

export default TradesRowSell;
