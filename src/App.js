import React, { Component } from 'react'; 
import logo from './kompas.png';
import './App.css';
function Biodata(props) {
  return <span>she's from {props.from}</span>
}

function Greeting(props) {
  return (
    <p> hi. i'd like to meet my friends {props.gender}  name {props.name} and {props.gender} <Biodata/> </p>
  );
}

class App extends Component {
  render() {
    return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
             <Greeting name="Noval" gender="He's" from="Makassar"/>
             <Greeting name="Nanda" gender="She's" from="Bulukumba"/>
            </header>
          </div>
        );
  }
}

export default App;
