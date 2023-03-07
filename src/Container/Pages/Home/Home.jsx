import React, {Component} from "react";
import RouterDom from "../Router/RouterDom";
// import Todolist from "../Todolist/Todolist";
// import Api from "../Api/Api";
// import BlogPost from "../BlogPost/BlogPost";
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="judul"></div>
                <RouterDom/>
            </div>
        )
    }
}

export default Home;