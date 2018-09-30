import React, { Component } from "react";

class ProductLine extends Component {
  render() {
    const title = "Product Option";
    let legend = "";
    let data = this.props.data;

    switch (data) {
      case "2":
        legend = "Superior";
        break;
      case "3":
        legend = "Ultimate";
        break;

      default:
        legend = "";
    }

    return (
      <div className="    col s12 m2 boxed redBorder">
        <p className="title red-text">{title}</p>

        <p className="legend center">{legend}</p>
      </div>
    );
  }
}

export default ProductLine;
