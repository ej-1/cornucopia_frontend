import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table } from "react-bootstrap";

import TradesRowBuy from "../tables/trades-row-buy";
import TradesRowSell from "../tables/trades-row-sell";
import "../tables/trades-table.css";

class TradesTable extends Component {
  render() {
    const rows = [];
    // Pass ID as key instead of index after adding database.
    // https://medium.com/@robinpokorny/index-as-a-key-is-an-anti-pattern-e0349aece318
    this.props.candleSticks.forEach((candleStick, index) => {
      if (candleStick.position === 1) {
        const tradeBuy = {
          date: candleStick.date,
          symbol: candleStick.symbol,
          close: candleStick.close,
          netProfit: candleStick.netProfit,
          index: index
        };
        rows.push(<TradesRowBuy {...tradeBuy} />);
      } else if (candleStick.position === -1 && candleStick.trade) {
        const tradeSell = {
          date: candleStick.date,
          symbol: candleStick.symbol,
          close: candleStick.close,
          tradePriceGain: candleStick.trade.tradePriceGain,
          tradePriceGainPercent: candleStick.trade.tradePriceGainPercent,
          netProfit: candleStick.netProfit,
          index: index
        };
        rows.push(<TradesRowSell {...tradeSell} />);
      }
    });

    return (
      <div className="trades-table-container">
        <Table responsive>
          <thead>
            <tr>
              <th>Trade Type</th>
              <th>Date</th>
              <th>Symbol</th>
              <th>Buy Price per Unit</th>
              <th>Sell Price per Unit</th>
              <th>Price Gain / Loss</th>
              <th>Profit percent</th>
              <th>Total Net Profit</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </div>
    );
  }
}

TradesTable.propTypes = {
  candleSticks: PropTypes.array.isRequired
};

export default TradesTable;
