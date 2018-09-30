import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <div className="navbar">
          <img className="logo" src="./img/roadvantage.png" alt="Logo" />
          <p className="right white-text ">
            Product Naming Conventions for Training
          </p>{" "}
        </div>
        <div className="navbar2" />
      </div>
    );
  }
}

export default Navbar;
