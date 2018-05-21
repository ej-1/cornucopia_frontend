import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import React, { Component } from "react";

const Layout = () => {
  <div>
    <Header />
    {this.props.children}
    <Footer />
  </div>;
};

export default Layout;
