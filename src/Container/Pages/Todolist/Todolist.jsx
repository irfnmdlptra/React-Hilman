import React, { Component} from "react";
import '../../Styles/Todolist.css';

class Todolist extends Component {
    constructor(props){
        super(props)
        this.state = {
            todoItem : '',
            items: []
        }
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.setState({
            items   : [...this.state.items, this.state.todoItem],
            todoItem: ''
        })
    }

    handleChange = (event) => {
        this.setState({
            todoItem: event.target.value
        })
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" value={this.state.todoItem} onChange={this.handleChange} />
                <button>Kirim</button> 
            </form>
        )
    }
}

export default Todolist
