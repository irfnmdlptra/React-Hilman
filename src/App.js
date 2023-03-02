import React, { Component } from 'react'; 
import logo from './bunga.png';
import Timer from './Component/Timer/Timer.jsx';
import Button from './Component/Button/Button.jsx';
import './App.css';

// STATE

class App extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
             <img src={logo} className="App-logo" alt="logo" />
             <Timer start="0"/>
             <Button/>
            </header>
          </div>
        );
  }
}

export default App;
