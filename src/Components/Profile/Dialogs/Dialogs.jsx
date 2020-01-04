import React from 'react';
import classes from './Dialogs.module.css';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import {changeMessageText, sentMessage} from '../../../Redux/reducer/dialogsPageReducer'



const Dialogs = (props) =>{

    let dialogElements = props.state.dialogs
        .map( (d) => <Dialog name = {d.name} id = {d.id}/> )

    let messageElements = props.state.messages
        .map( (m) => <Message message = {m.message} id = {m.id}/>)


        let messageText = React.createRef();

        let change = () => {
            let text = messageText.current.value;
            props.dispatch(changeMessageText(text))

        }
            
        let sent = () =>{
            props.dispatch(sentMessage())
        }
   
   
        return(
        <div className = {classes.dialogs}>
            <div className = {classes.dialogs_items}>	
                {dialogElements}
            </div>


            <div className={classes.messages}>
                {messageElements}
                <textarea ref = {messageText} onChange = {change} value = {props.state.newMessageText}></textarea>
                <button onClick = {sent}>Отправить</button>
            </div>
        </div>
       
    )
}

export default Dialogs;