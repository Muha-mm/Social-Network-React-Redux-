import React from "react";
import classes from "./Myposts.module.css";
import Post from "./Post/Post";
import {addPost, changePostText} from '../../../Redux/reducer/profilePageReducer'


const Myposts = (props) => {


  let PostElements = props.profilePage.PostData.map(post => (
    <Post likeCount={post.likeCount} message={post.message} />
  ));
  
    let newPostElement = React.createRef();
    let newPost = () =>{
      props.dispatch(addPost())
      // props.addPost();
    }

    let newPostText = () =>{
      let text = newPostElement.current.value;      
      props.dispatch(changePostText(text))
      // props.changePostText(text);
    }


  return (
    <div className={classes.postsBlock}>  
      <h3> My posts </h3>

      <div className={classes.posts}>
        <div>
          <textarea ref = {newPostElement} onChange = {newPostText} value = {props.profilePage.newPostText}/>
        </div>
        <div className={classes.button}>
          <button onClick = {newPost}>Add post</button>
        </div>

        {PostElements.reverse()}
      </div>
    </div>
  );
};

export default Myposts;