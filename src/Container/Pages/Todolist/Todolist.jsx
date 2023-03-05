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
    handleSubmit(e){
        e.preventDefault()
        console.log('terpanggilkan')
    }

    render() {
        return (
            <form action="" onSubmit={this.handleSubmit}>
                <input type="text" />
                <button>Kirim</button>
            </form>
        )
    }
}

export default Todolist