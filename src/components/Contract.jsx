import React, { Component } from "react";

import Searchbar from "./Searchbar";
import ContractSeparation from "./ContractSeparation";

import ProductLine from "./ProductLine";
import ProductOption from "./ProductOption";
import ErsOption from "./ErsOption";
import SpecialIdentifier from "./SpecialIdentifier";
import StateIdentifier from "./StateIdentifier";
import CompanyIdentifier from "./CompanyIdentifier";

class Contract extends Component {
  constructor() {
    super();
    this.state = {
      contract: "PPC2AJWRD",
      productLineChar: 0,
      productLineAbr: "",
      productOptionChar: 0,
      productOptionAbr: "",
      ersOptionChar: 0,
      ersOptionAbr: "",
      specialIdentifierChar: 0,
      specialIdentifierAbr: "",
      stateIdentifierChar: 0,
      stateIdentifierAbr: "",
      companyIdentifierChar: 0,
      companyIdentifierAbr: ""
    };
  }

  componentWillMount() {
    //this.findProductLine(this.state.contract);
  }

  render() {
    return (
      <div className="App">
        <Searchbar
          term={this.state.contract}
          changeTerm={term => this.changeContract(term)}
        />
        <ContractSeparation
          productLine={this.state.productLineAbr}
          productOption={this.state.productOptionAbr}
          ersOption={this.state.ersOptionAbr}
          specialIdentifier={this.state.specialIdentifierAbr}
          stateIdentifier={this.state.stateIdentifierAbr}
          companyIdentifier={this.state.companyIdentifierAbr}
        />
        <div className="row">
          <ProductLine data={this.state.productLineAbr} />
          <ProductOption data={this.state.productOptionAbr} />
          <ErsOption data={this.state.ersOptionAbr} />
          <SpecialIdentifier data={this.state.specialIdentifierAbr} />
          <StateIdentifier data={this.state.stateIdentifierAbr} />
          <CompanyIdentifier data={this.state.companyIdentifierAbr} />
        </div>
      </div>
    );
  }

  changeContract = contract => {
    this.setState({ contract: contract });

    this.findProductLine(contract);
    setTimeout(() => {
      this.findProductOption(contract);
    }, 10);
    setTimeout(() => {
      this.findErsOption(contract);
    }, 20);
    setTimeout(() => {
      this.findSpecialIdentifier(contract);
    }, 30);
    setTimeout(() => {
      this.findStateIdentifier(contract);
    }, 40);
    setTimeout(() => {
      this.findCompanyIdentifier(contract);
    }, 50);
  };

  findProductLine = contract => {
    contract = contract.slice(0, 4);
    if (
      contract === "WSRX" ||
      contract === "WSRJ" ||
      contract === "PPTW" ||
      contract === "PPAW" ||
      contract === "PCA2"
    ) {
      this.setState({ productLineChar: 4, productLineAbr: contract });
      return null;
    } else {
      contract = contract.slice(0, 3);
      if (
        contract === "PTW" ||
        contract === "GTX" ||
        contract === "GAP" ||
        contract === "PDD" ||
        contract === "PAW" ||
        contract === "VAP" ||
        contract === "VAS" ||
        contract === "VAU" ||
        contract === "PCA" ||
        contract === "PPL" ||
        contract === "PPC"
      ) {
        this.setState({ productLineChar: 3, productLineAbr: contract });
        return null;
      } else {
        contract = contract.slice(0, 2);
        if (
          contract === "TW" ||
          contract === "PE" ||
          contract === "KY" ||
          contract === "DD" ||
          contract === "AW" ||
          contract === "AT" ||
          contract === "VA" ||
          contract === "VP" ||
          contract === "VS" ||
          contract === "VU" ||
          contract === "PP" ||
          contract === "PC"
        ) {
          this.setState({ productLineChar: 2, productLineAbr: contract });
          return null;
        } else {
          contract = contract.slice(0, 1);
          if (contract === "V" || contract === "P") {
            this.setState({ productLineChar: 1, productLineAbr: contract });
            return null;
          } else {
            this.setState({ productLineChar: 0, productLineAbr: "" });
          }
        }
      }
    }
  };
  findProductOption = contract => {
    contract = contract.slice(
      this.state.productLineChar,
      this.state.productLineChar + 1
    );
    if (contract === "2" || contract === "3") {
      this.setState({ productOptionChar: 1, productOptionAbr: contract });
    } else {
      this.setState({ productOptionChar: 0, productOptionAbr: "" });
    }
  };
  findErsOption = contract => {
    contract = contract.slice(
      this.state.productLineChar + this.state.productOptionChar,
      this.state.productLineChar + this.state.productOptionChar + 1
    );

    if (contract === "A" || contract === "B") {
      this.setState({ ersOptionChar: 1, ersOptionAbr: contract });
    } else {
      this.setState({ ersOptionChar: 0, ersOptionAbr: "" });
    }
  };

  findSpecialIdentifier = contract => {
    contract = contract.slice(
      this.state.productLineChar +
        this.state.productOptionChar +
        this.state.ersOptionChar,
      this.state.productLineChar +
        this.state.productOptionChar +
        this.state.ersOptionChar +
        3
    );
    if (contract === "F1N") {
      this.setState({
        specialIdentifierChar: 3,
        specialIdentifierAbr: contract
      });
      return null;
    } else {
      contract = contract.slice(0, 2);
      if (contract === "NA" || contract === "F1") {
        this.setState({
          specialIdentifierChar: 2,
          specialIdentifierAbr: contract
        });
        return null;
      } else {
        contract = contract.slice(0, 1);
        if (
          contract === "Z" ||
          contract === "X" ||
          contract === "V" ||
          contract === "S" ||
          contract === "R" ||
          contract === "Q" ||
          contract === "L" ||
          contract === "K" ||
          contract === "J" ||
          contract === "F" ||
          contract === "D" ||
          contract === "C"
        ) {
          this.setState({
            specialIdentifierChar: 1,
            specialIdentifierAbr: contract
          });
          return null;
        } else {
          contract = contract.slice(0, 1);
          if (contract === "V" || contract === "P") {
            this.setState({
              specialIdentifierChar: 1,
              specialIdentifierAbr: contract
            });
            return null;
          } else {
            this.setState({
              specialIdentifierChar: 0,
              specialIdentifierAbr: ""
            });
          }
        }
      }
    }
  };

  findStateIdentifier = contract => {
    contract = contract.slice(
      this.state.productLineChar +
        this.state.productOptionChar +
        this.state.ersOptionChar +
        this.state.specialIdentifierChar,
      this.state.productLineChar +
        this.state.productOptionChar +
        this.state.ersOptionChar +
        this.state.specialIdentifierChar +
        2
    );

    if (contract === "FL") {
      this.setState({
        stateIdentifierChar: 2,
        stateIdentifierAbr: contract
      });
      return null;
    } else {
      contract = contract.slice(0, 1);
      if (contract === "Y" || contract === "W" || contract === "G") {
        this.setState({
          stateIdentifierChar: 1,
          stateIdentifierAbr: contract
        });
        return null;
      } else {
        this.setState({
          stateIdentifierChar: 0,
          stateIdentifierAbr: ""
        });
      }
    }
  };

  findCompanyIdentifier = contract => {
    contract = contract.slice(
      this.state.productLineChar +
        this.state.productOptionChar +
        this.state.ersOptionChar +
        this.state.specialIdentifierChar +
        this.state.stateIdentifierChar,
      this.state.productLineChar +
        this.state.productOptionChar +
        this.state.ersOptionChar +
        this.state.specialIdentifierChar +
        this.state.stateIdentifierChar +
        2
    );
    console.log(contract);
    if (
      contract === "WS" ||
      contract === "SG" ||
      contract === "RD" ||
      contract === "PW" ||
      contract === "CN" ||
      contract === "AG"
    ) {
      this.setState({
        companyIdentifierChar: 2,
        companyIdentifierAbr: contract
      });
      return null;
    } else {
      this.setState({
        companyIdentifierChar: 0,
        companyIdentifierAbr: ""
      });
    }
  };
}

export default Contract;
