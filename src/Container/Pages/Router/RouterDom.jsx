import React, { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return <h2>Home Page</h2>;
}

function ListView() {
  return <h2>About Me</h2>;
}

function NoMatch() {
  return <h2>404, Halaman Tidak Ditemukan</h2>;
}

class Navbar extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <nav>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/users">User</Link>
            </li>
          </nav>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<ListView />} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    );
  } 
}

export default Navbar;
