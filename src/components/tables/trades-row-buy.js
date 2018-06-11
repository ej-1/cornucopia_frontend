import React from "react";

const TradesRowBuy = ({ trade, index }) => (
  <tr key={index}>
    <td key={`${index}-${0}`}>
      <span style={{ color: "green" }}>Buy</span>
    </td>
    <td key={`${index}-${1}`}>{trade.date}</td>
    <td key={`${index}-${2}`}>{trade.symbol}</td>
    <td key={`${index}-${3}`}>{trade.close}</td>
    <td key={`${index}-${4}`} />
    <td key={`${index}-${5}`} />
    <td key={`${index}-${6}`} />
    <td key={`${index}-${7}`}>{trade.netProfit}</td>
  </tr>
);

export default TradesRowBuy;
