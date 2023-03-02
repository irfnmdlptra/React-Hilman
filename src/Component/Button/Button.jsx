import React, { Component } from "react";
import './Button.css';

function Clicker() {
  function HandleCilck(e) {
    e.preventDefault();
    
  }
  return (
    <button className="btn-alert" onClick={HandleCilck}>
      <span>Clik Me</span>
    </button>
  );
}

class Svg extends Component {
  render() {
    return (
      <div>
        <Clicker />
      </div>
    );
  }
}

export default Svg;
