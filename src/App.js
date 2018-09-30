import React, { Component } from "react";

import Navbar from "./components/Navbar";
import Contract from "./components/Contract";
import Footer from "./components/Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Contract />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
