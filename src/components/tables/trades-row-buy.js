import React from "react";

const TradesRowBuy = ({ date, symbol, close, netProfit, index }) => (
  <tr key={index}>
    <td key={`${index}-${0}`}>
      <span style={{ color: "green" }}>Buy</span>
    </td>
    <td key={`${index}-${1}`}>{date}</td>
    <td key={`${index}-${2}`}>{symbol}</td>
    <td key={`${index}-${3}`}>{close}</td>
    <td key={`${index}-${4}`} />
    <td key={`${index}-${5}`} />
    <td key={`${index}-${6}`} />
    <td key={`${index}-${7}`}>{netProfit}</td>
  </tr>
);

export default TradesRowBuy;
