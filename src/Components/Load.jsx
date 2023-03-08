import logo from "../bunga.png";
import { useNavigate } from "react-router";
import "../App.css";

function Not() {
  const navigate = useNavigate()

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Not Responding 404</h1>
        <button onClick={() => navigate('/')}>Reload</button>
      </header>
    </div>
  );
}

export default Not;
