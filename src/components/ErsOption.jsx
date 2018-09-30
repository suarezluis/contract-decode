import React, { Component } from "react";

class ProductLine extends Component {
  render() {
    const title = "ERS Option";
    let legend = "";
    let data = this.props.data;

    switch (data) {
      case "A":
        legend = "With ERS";
        break;
      case "B":
        legend = "Without ERS";
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
