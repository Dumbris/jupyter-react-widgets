import React from "react";

export default class SampleWidget extends React.Component {

  // ***********************************************
  // Constructors
  // ***********************************************
  constructor(props) {
    super(props);
    this.state = { value: "" };
  }

  // ***********************************************
  // Properties
  // ***********************************************
  get value() {
    return this.state.value;
  }

  set value(value) {
    this.setState({ value });
  }

  // ***********************************************
  // React methods
  // ***********************************************
  render() {
    return (
      <span>React says, "{ this.state.value }"</span>
    );
  }
}