import React from 'react';
import classes from './Message.module.css';
import MessageComponent from '../MessageComponent/MessageComponent';
import {Route} from 'react-router-dom'


const Message = (props) =>{

    return(
            <div className={classes.message}>
                <Route path = {'/Dialogs/' + props.id  } render = {() =>   <MessageComponent message = {props.message} id = {props.id} />} />
                {console.log(props.message)} 
            </div>            
       
    )
}

export default Message;