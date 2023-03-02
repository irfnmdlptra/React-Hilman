import React, { Component } from "react";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: props.start,
    };
  }

  // Lifecycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.addInterval);
  }

  increase() {
    // Update state time setiap detik
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1,
    }));
  }

  render() {
    return <button className="shadow__btn">{this.state.time}</button>;
  }
}

export default Timer;
