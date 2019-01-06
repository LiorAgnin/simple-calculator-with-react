import React, { Component } from "react";
import Button from "./components/Button";
import Display from "./components/Display";
import Clear from "./components/Clear";
import mathJs from "mathjs";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ""
    };
  }

  onKeyDownHandler = key => {
    if (
      Number(key) ||
      ["-", "+", "*", "/", ".", "Backspace", "Enter", "="].includes(key)
    ) {
      if (key === "Backspace") {
        this.handleClear();
      } else if (key === "Enter" || key === "=") {
        this.handleEqual();
      } else {
        this.setState(this.handleInput(key));
      }
    }
  };

  addToDisplay = val => {
    switch (val) {
      case "clear":
        this.setState({ input: "" });
        break;
      case "equal":
        this.handleEqual();
        break;
      default:
        this.setState(this.handleInput(val));
        break;
    }
  };

  handleInput = val => {
    const { input } = this.state;
    if (
      input.startsWith("+") ||
      input.startsWith("-") ||
      input.startsWith("*") ||
      input.startsWith("/")
    ) {
      const input = (this.state.input + val).substr(1);
      return { input };
    } else if (
      (input.endsWith("+") ||
        input.endsWith("-") ||
        input.endsWith("*") ||
        input.endsWith(".") ||
        input.endsWith("/")) &&
      ["-", "+", "*", "/", "."].includes(val)
    ) {
      const lastOpertorIndex = this.state.input[this.state.input.length - 1];
      const input = this.state.input.replace(lastOpertorIndex, val);
      return { input };
    } else {
      const input = this.state.input + val;
      return { input };
    }
  };

  handleEqual = () => {
    const { input } = this.state;

    if (
      input.endsWith("+") ||
      input.endsWith("-") ||
      input.endsWith("*") ||
      input.endsWith("/")
    ) {
      this.setState({ input: "0" });
    } else if (
      (input.endsWith("0") && input[input.length - 2] === "/") ||
      (input.startsWith("0") && input[1] === "/")
    ) {
      this.setState({ input: "Can't divide by 0" });
    } else {
      const input = mathJs.eval(this.state.input) || 0;
      this.setState({ input: input.toString() });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="wrapper">
          <Display input={this.state.input} />
          <div className="row">
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="7"
              value="7"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="8"
              value="8"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="9"
              value="9"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="/"
              value="/"
            />
          </div>
          <div className="row">
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="4"
              value="4"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="5"
              value="5"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="6"
              value="6"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="X"
              value="*"
            />
          </div>
          <div className="row">
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="1"
              value="1"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="2"
              value="2"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="3"
              value="3"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="+"
              value="+"
            />
          </div>
          <div className="row">
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="."
              value="."
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="0"
              value="0"
            />
            <Button
              handleClick={this.handleEqual}
              handleKeyDown={this.onKeyDownHandler}
              label="="
              value="equal"
            />
            <Button
              handleClick={this.addToDisplay}
              handleKeyDown={this.onKeyDownHandler}
              label="-"
              value="-"
            />
          </div>
          <div className="row">
            <Clear handleClick={this.addToDisplay} label="Clear" value="clear">
              Clear
            </Clear>
          </div>
        </div>
      </div>
    );
  }
}
