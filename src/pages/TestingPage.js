import React, { Component } from "react";
import Fade from "react-awesome-reveal";

import InputNumber from "../elements/Form/InputNumber";
import InputDate from "../elements/Form/InputDate";

export default class Example extends Component {
  state = {
    value: {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    console.log(this.state.value);
    return (
      <div
        className="row align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <Fade direction="left">
          <div className="col-auto">
            <InputDate
              max={30}
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
