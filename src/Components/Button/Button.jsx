import React, { Component } from "react";
import './Button.css';

// function Clicker() {
//   function HandleCilck(e) {
//     e.preventDefault();
//     alert('coba')
//   }
//   return (
//     <button className="btn-alert" onClick={HandleCilck}>
//       <span>Clik Me</span>
//     </button>
//   );
// }


// class Toggle extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       toggleStatus: true
//     }

//     this.handleClick = this.handleClick.bind(this)
//   }

//   handleClick(){
//     if(this.state.toggleStatus) {
//       alert('On')
//     } else {
//       alert('off')
//     }
//     this.setState(state => ({
//       toggleStatus: !state.toggleStatus
//     }))
//   }
//   render() {
//     return (
//       <button  className="btn-alert" onClick={this.handleClick}>
//         <span>Clik  {this.state.toggleStatus ? 'ON' : 'OFF'}</span>
//       </button>
//     )
//   }
// }

class Svg extends Component {
  render() {
    return (
      <div>
        <Toggle />
      </div>
    );
  }
}

export default Svg;
