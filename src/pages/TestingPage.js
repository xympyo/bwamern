import React, { Component } from "react";
import Fade from "react-awesome-reveal";

import InputNumber from "../elements/Form/InputNumber";
import InputDate from "../elements/Form/InputDate";

export default class Example extends Component {
  state = {
    value: "1",
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state.value);
    return (
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh", border: "border-primary" }}
      >
        <Fade direction="left">
          <div className="col-auto">
            <InputNumber
              max={30}
              suffix=" night"
              isSuffixPlural
              onChange={this.handleChange}
              name="value"
              value={this.state.value}
            />
          </div>
        </Fade>
        {/* <div className="col-auto">
          <InputDate />
        </div> */}
      </div>
    );
  }
}
