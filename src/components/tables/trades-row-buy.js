import React from "react";

class TradesRowBuy extends React.Component {
  render() {
    const trade = this.props.trade;
    const index = this.props.index;
    console.log(trade)
    return (
      <tr key={index}>
        <td key={`${index}-${0}`}><span style={{color: 'green'}}>Buy</span></td>
        <td key={`${index}-${1}`}>{trade.Date}</td>
        <td key={`${index}-${2}`}>{trade.Symbol}</td>
        <td key={`${index}-${3}`}>{trade.Close}</td>
        <td key={`${index}-${4}`}/>
        <td key={`${index}-${5}`}/>
        <td key={`${index}-${6}`}/>
        <td key={`${index}-${7}`}>{trade.netProfit}</td>
      </tr>
    )
  }
}

export default TradesRowBuy;
