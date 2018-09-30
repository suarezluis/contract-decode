import React, { Component } from "react";

class ProductLine extends Component {
  render() {
    const title = "State Identifier";
    let legend = "";
    let data = this.props.data;

    switch (data) {
      case "FL":
        legend = "Florida specific";
        break;
      case "G":
        legend = "New York specific";
        break;
      case "W":
        legend = "California specific";
        break;
      case "Y":
        legend = "Washington specific";
        break;

      default:
        legend = "";
    }

    return (
      <div className="    col s12 m2 boxed blackBorder">
        <p className="title black-text">{title}</p>
        <p className="legend center">{legend}</p>
      </div>
    );
  }
}

export default ProductLine;
