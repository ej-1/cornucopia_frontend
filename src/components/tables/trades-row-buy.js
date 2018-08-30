import React from "react";

const TradesRowBuy = ({ date, symbol, close, netProfit, index }) => (
  <tr key={index}>
    <td className="trade-type">
      <span className="trades-row-buy">Buy</span>
    </td>
    <td>{date}</td>
    <td>{symbol}</td>
    <td>{close}</td>
    <td />
    <td />
    <td />
    <td>{netProfit}</td>
  </tr>
);

export default TradesRowBuy;
