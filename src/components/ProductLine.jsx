import React, { Component } from "react";

class ProductLine extends Component {
  render() {
    const title = "Product Line";
    let subtitle = "";
    let legend = "";
    let data = this.props.data;

    switch (data) {
      case "P":
        subtitle = "Preferred Bundled Product";
        legend = "Preferred";
        break;
      case "PC":
        subtitle = "Preferred Bundled Product";
        legend = "Preferred Care";
        break;
      case "PP":
        subtitle = "Preferred Bundled Product";
        legend = "PreferredPlus";
        break;
      case "PPC":
        subtitle = "Preferred Bundled Product";
        legend = "PreferredPlus Care";
        break;
      case "PPL":
        subtitle = "Preferred Bundled Product";
        legend = "Preferred LeaseCare";
        break;
      case "PCA":
        subtitle = "Preferred Bundled Product";
        legend = "Preferred Care Advantage (Dealer Advantage)";
        break;
      case "PCA2":
        subtitle = "Preferred Bundled Product";
        legend =
          "Preferred Care Advantage (Dealer Advantage) no Cosmetic Wheel";
        break;
      case "V":
        subtitle = "Vantage Bundled Product (semi-retired)";
        legend = "Vantage";
        break;
      case "VU":
        subtitle = "Vantage Bundled Product (semi-retired)";
        legend = "Vantage Ultimate";
        break;
      case "VS":
        subtitle = "Vantage Bundled Product (semi-retired)";
        legend = "Vantage Superior";
        break;
      case "VP":
        subtitle = "Vantage Bundled Product (semi-retired)";
        legend = "Vantage Premium";
        break;
      case "VA":
        subtitle = "Vantage Bundled Product (semi-retired)";
        legend = "Vantage Care";
        break;
      case "VAU":
        subtitle = "Vantage Bundled Product (semi-retired)";
        legend = "Vantage Care Ultimate";
        break;
      case "VAS":
        subtitle = "Vantage Bundled Product (semi-retired)";
        legend = "Vantage Care Superior";
        break;
      case "VAP":
        subtitle = "Vantage Bundled Product (semi-retired)";
        legend = "Vantage Care Premium";
        break;
      case "AT":
        subtitle = "Standalone Product";
        legend = "Anti-Theft";
        break;
      case "AW":
        subtitle = "Standalone Product";
        legend = "Cosmetic Wheel";
        break;
      case "PAW":
        subtitle = "Standalone Product";
        legend = "Preferred Cosmetic Wheel";
        break;
      case "PPAW":
        subtitle = "Standalone Product";
        legend = "PreferredPlus Cosmetic Wheel";
        break;
      case "DD":
        subtitle = "Standalone Product";
        legend = "Dent & Ding";
        break;
      case "PDD":
        subtitle = "Standalone Product";
        legend = "Preferred Dent & Ding";
        break;
      case "GAP":
        subtitle = "Standalone Product";
        legend = "GAP";
        break;
      case "GTX":
        subtitle = "Standalone Product";
        legend = "GAP Texas";
        break;
      case "KY":
        subtitle = "Standalone Product";
        legend = "Key Replacement";
        break;
      case "PE":
        subtitle = "Standalone Product";
        legend = "Preferred Int/Ext";
        break;
      case "TW":
        subtitle = "Standalone Product";
        legend = "Tire & Wheel";
        break;
      case "PTW":
        subtitle = "Standalone Product";
        legend = "Preferred Tire & Wheel";
        break;
      case "PPTW":
        subtitle = "Standalone Product";
        legend = "PreferredPlus Tire & Wheel";
        break;
      case "WS":
        subtitle = "Standalone Product";
        legend = "Windshield Repair";
        break;
      case "WSRJ":
        subtitle = "Standalone Product";
        legend = "Windshield Repair/Replacement";
        break;
      case "WSRX":
        subtitle = "Standalone Product";
        legend = "Windshield Repellency";
        break;
      default:
        subtitle = "";
        legend = "";
    }

    return (
      <div className="    col s12 m2 boxed orangeBorder">
        <p className="title orange-text">{title}</p>
        <p className="subtitle orange-text">{subtitle}</p>
        <p className="legend center">{legend}</p>
      </div>
    );
  }
}

export default ProductLine;
