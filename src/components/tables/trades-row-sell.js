import React from "react";

const TradesRowSell = ({ candleStick, trade, index }) => (
  <tr key={index}>
    <td key={`${index}-${0}`}>
      <span style={{ color: "red" }}>Sell</span>
    </td>
    <td key={`${index}-${1}`}>{candleStick.date}</td>
    <td key={`${index}-${2}`}>{candleStick.symbol}</td>
    <td key={`${index}-${3}`} />
    <td key={`${index}-${4}`}>{candleStick.Close}</td>
    <td key={`${index}-${5}`}>{parseFloat(trade.tradePriceGain).toFixed(5)}</td>
    <td key={`${index}-${6}`}>
      {parseFloat(trade.tradePriceGainPercent * 100).toFixed(2)} %
    </td>
    <td key={`${index}-${7}`}>{candleStick.netProfit}</td>
  </tr>
);

export default TradesRowSell;
