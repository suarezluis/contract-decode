import React, { Component } from "react";

class ContractSeparation extends Component {
  render() {
    return (
      <div className="center resultCode">
        <p>
          <span className="orange-text resultCode">
            {this.props.productLine}
          </span>{" "}
          <span />
          <span className="red-text resultCode">
            {this.props.productOption}
          </span>{" "}
          <span />
          <span className="black-text resultCode">
            {this.props.ersOption}
          </span>{" "}
          <span />
          <span className="red-text resultCode">
            {this.props.specialIdentifier}
          </span>{" "}
          <span />
          <span className="black-text resultCode">
            {this.props.stateIdentifier}
          </span>{" "}
          <span />
          <span className="green-text resultCode">
            {this.props.companyIdentifier}
          </span>
        </p>
      </div>
    );
  }
}

export default ContractSeparation;
