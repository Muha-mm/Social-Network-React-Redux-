import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img src="https://geek.justjoin.it/wp-content/uploads/2018/08/react2.png" />
      <div className={classes.message}>{props.message}</div>
      <div className={classes.like}>
        <button className = {classes.buttonLike}> like</button>
        {props.likeCount}
      </div>
    </div>
  );
};

export default Post;
