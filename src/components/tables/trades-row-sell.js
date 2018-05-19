import React from "react";

class TradesRowSell extends React.Component {
  render() {
    const candleStick = this.props.candleStick
    const trade = this.props.candleStick.trade;
    const index = this.props.index;
    console.log(trade)
    return (
      <tr key={index}>
        <td key={`${index}-${0}`} ><span style={{color: 'red'}}>Sell</span></td>
        <td key={`${index}-${1}`}>{candleStick.Date}</td>
        <td key={`${index}-${2}`}>{candleStick.Symbol}</td>
        <td key={`${index}-${3}`}/>
        <td key={`${index}-${4}`}>{candleStick.Close}</td>
        <td key={`${index}-${5}`}>{parseFloat(trade.tradePriceGain).toFixed(5)}</td>
        <td key={`${index}-${6}`}>
          {parseFloat(trade.tradePriceGainPercent * 100).toFixed(2)} %
        </td>
        <td key={`${index}-${7}`}/>
        <td key={`${index}-${8}`}>{trade.netProfit}</td>
      </tr>
    )
  }
}

export default TradesRowSell;

