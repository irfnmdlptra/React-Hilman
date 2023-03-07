import React, {Component} from "react";
// import Todolist from "../Todolist/Todolist";
// import Api from "../Api/Api";
import RouterDom from "../Router/RouterDom";
// import BlogPost from "../BlogPost/BlogPost";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="judul"><h1>Home</h1></div>
                <RouterDom/>
            </div>
        )
    }
}

export default Home;