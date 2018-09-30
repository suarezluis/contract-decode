import React, { Component } from "react";

class Searchbar extends Component {
  render() {
    return (
      <div className="search center">
        Contract:{" "}
        <div className="input-field inline">
          <input
            className=""
            type="text"
            name="fname"
            placeholder={this.props.term}
            onChange={event =>
              this.props.changeTerm(event.target.value.toUpperCase())
            }
          />
        </div>
      </div>
    );
  }
}

export default Searchbar;
