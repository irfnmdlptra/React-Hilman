import React, { Component } from "react";
import List from "./List";
import Path from "./Path";
import "./Todolist.css";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItem: "",
      items: [],
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      items: [...this.state.items, this.state.todoItem],
      todoItem: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      todoItem: event.target.value,
    });
  };

  handleClear = () => {
    this.setState({
      items: []
    });
  }

  render() {
    return (
      <div className="container">
      <div className="popup">
        <form class="form" action="" onSubmit={this.handleSubmit}>
          <Path/>
          <input type="text" value={this.state.todoItem} onChange={this.handleChange} placeholder="Masukkan List" title="Enter your e-mail" name="email"  class="input_field" required  />
          <button className="submit">Buat</button>
        </form>
      </div>
        <div className="list">
        {this.state.items.length > 0 && (
            <>
              <List items={this.state.items} />
              <button className="clear" onClick={this.handleClear}>Reset</button>
            </>
          )}
        </div>
      </div>
    );
  }
}

export default Todolist;
