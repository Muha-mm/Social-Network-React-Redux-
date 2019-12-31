import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';



const Dialogs = (props) =>{

    let dialogElements = props.state.dialogs
        .map( (d) => <Dialog name = {d.name} id = {d.id}/> )

    let messageElements = props.state.messages
        .map( (m) => <Message message = {m.message} id = {m.id}/>)


  
 
   
   
        return(
        <div className = {classes.dialogs}>
            <div className = {classes.dialogs_items}>	
                {dialogElements}
            </div>

            <div className = {classes.line}></div>

            <div className={classes.messages}>
                {messageElements}
                
               
            </div>
        </div>
       
    )
}

export default Dialogs;