import React, { Component } from "react";

class ProductLine extends Component {
  render() {
    const title = "Special Identifier";
    let legend = "";
    let data = this.props.data;

    switch (data) {
      case "C":
        legend = "No Interior";
        break;
      case "D":
        legend = "Driven Motor Club";
        break;
      case "F":
        legend = "Dry Interior/Exterior Repair/Replacement";
        break;
      case "F1":
        legend = "Dry Interior/Exterior Repair Only, NO Replacement";
        break;
      case "F1N":
        legend = "Dry Interior Repair Only, No Replacement, No Exterior";
        break;
      case "J":
        legend = "Windshield Repair/Replacement";
        break;
      case "K":
        legend = "Motor Club Key (Only in CA)";
        break;
      case "L":
        legend = "No Dent & Ding Hail Damage Coverage";
        break;
      case "Q":
        legend = "Vehicle Key (not noted on POS part numbers)";
        break;
      case "R":
        legend = "Tire Replacement Only, No Repair";
        break;
      case "S":
        legend = "Saferide Motor Club";
        break;
      case "V":
        legend = "VSC Key";
        break;
      case "X":
        legend = "Wet Interior/Exterior";
        break;
      case "Z":
        legend = "No Windshield";
        break;
      case "NA":
        legend = "Non-Cancellable";
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
