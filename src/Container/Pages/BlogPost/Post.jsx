import React from "react";

const Post = (props) => {
  return (
      <div className="post">
        <div className="image">
          <img src="https://source.unsplash.com/278x80?" alt="" />
        </div>
        <span className="title">{props.title}</span>
        <p className="info">{props.desc}</p>
        <button>Resume</button>
      </div>
  )
}

export default Post;
