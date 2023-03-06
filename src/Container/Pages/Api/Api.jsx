import React, { Component } from "react";
import './Api.css';
import Loaders from "./Loaders";

class Api extends Component{
    constructor(props) {
        super(props)
        this.state = {
            items: [],
            isLoading: true
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({ items: data, isLoading: false }))
    }


    render() {
        const { items, isLoading } = this.state

        if(isLoading) {
            return <Loaders/>
        }
        return (
            <div>
                <ul>
                    { items.map((item, index) => 
                    <li key={index}> {item.name} </li> )}
                </ul>
            </div>
        )
    }
}

export default Api;