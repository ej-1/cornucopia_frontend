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
    <td key={`${index}-${0}`}>
      <span style={{ color: "red" }}>Sell</span>
    </td>
    <td key={`${index}-${1}`}>{date}</td>
    <td key={`${index}-${2}`}>{symbol}</td>
    <td key={`${index}-${3}`} />
    <td key={`${index}-${4}`}>{Close}</td>
    <td key={`${index}-${5}`}>{parseFloat(tradePriceGain).toFixed(5)}</td>
    <td key={`${index}-${6}`}>
      {parseFloat(tradePriceGainPercent * 100).toFixed(2)} %
    </td>
    <td key={`${index}-${7}`}>{netProfit}</td>
  </tr>
);

export default TradesRowSell;
