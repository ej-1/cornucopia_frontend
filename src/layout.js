import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import React, { Component } from "react";

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}

export default Layout;
