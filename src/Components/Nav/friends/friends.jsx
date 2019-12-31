import React from 'react';
import classes from './friends.module.css';

const Friends = (props) => {

   
    return (
        <div className = {classes.friends}>
            <img src= "https://st.kp.yandex.net/images/actor_iphone/iphone360_916729.jpg" />
        <div className = {classes.name}>    
            {props.name}
        </div>
        </div>
    );
}

export default Friends;

