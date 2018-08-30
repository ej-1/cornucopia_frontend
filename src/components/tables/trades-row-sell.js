import React from "react";

const TradesRowSell = ({
  date,
  symbol,
  close,
  tradePriceGain,
  tradePriceGainPercent,
  netProfit,
  index
}) => (
  <tr key={index}>
    <td className="trade-type">
      <span className="trades-row-sell">Sell</span>
    </td>
    <td>{date}</td>
    <td>{symbol}</td>
    <td />
    <td>{close}</td>
    <td>{tradePriceGain}</td>
    <td>{tradePriceGainPercent} %</td>
    <td>{netProfit}</td>
  </tr>
);

export default TradesRowSell;
