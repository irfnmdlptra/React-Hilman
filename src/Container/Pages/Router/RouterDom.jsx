import React, { Component } from "react";
import {BrowserRouter, Route, Link} from 'react-router-dom'

function Home (){
    return <h2>Halaman Home </h2>
}

function ListView (){
    return <h2>Semua User </h2>
}


class RouterDom extends Component {
    render() {
        return (
            <BrowserRouter>
                <nav>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/users'> User </Link></li>
                </nav>

                <main>
                    <Route path="/" element={<Home />} />
                    <Route path="/users" element={<ListView />} />
                </main>
            </BrowserRouter>
        )
    }
}

export default RouterDom;
