import React, { Component, createElement } from 'react'; 
import logo from './bunga.png';
import Timer from './Component/Timer/Timer.jsx';
import Button from './Component/Button/Button.jsx';
import './App.css';

// STATE
function Clicker(props) {
  function HandleClick(e){
    // e.preventDefault()
    alert('berhasil');
  }
  return (
    <div className='divBaru'>
      <a href='#' onClick={HandleClick} >{props.name} </a>
    </div>

  )
}
class App extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <Timer start="0"/>
             <Button/>
             <Clicker name="refa"/>
             <Clicker name="ippang"/>
             
            </header>
          </div>
        );
  }
}



export default App;
