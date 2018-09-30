import React, { Component } from "react";

class ProductLine extends Component {
  render() {
    const title = "Company Identifier";
    let legend = "";
    let data = this.props.data;

    switch (data) {
      case "AG":
        legend = "Atlantic Group";
        break;
      case "CN":
        legend = "CNAN (Continental Casualty Company)";
        break;
      case "PW":
        legend = "PWC Principal Car Care (Principal Warranty Company)";
        break;
      case "RD":
        legend = "RoadVantage";
        break;
      case "SG":
        legend = "Service Group";
        break;
      case "WS":
        legend = "Warranty Solutions";
        break;
      default:
        legend = "";
    }

    return (
      <div className="    col s12 m2 boxed greenBorder">
        <p className="title green-text">{title}</p>
        <p className="legend center">{legend}</p>
      </div>
    );
  }
}

export default ProductLine;
