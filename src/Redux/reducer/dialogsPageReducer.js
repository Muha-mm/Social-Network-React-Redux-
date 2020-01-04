export let dialogsReducer =  (state, action) => {

    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage = {
                id:10,
                message:state.newMessageText,
            }
            state.messages.push(newMessage);
            state.newMessageText = '';
            return state;

        case 'CHANGE-MESSAGE-TEXT':
            state.newMessageText = action.textMessage;
            return state;
        
        default:
            return state;
            }
        
}

export const changeMessageText = (text) => ({
    type : 'CHANGE-MESSAGE-TEXT',
    textMessage:text
  })
    
export const sentMessage = () =>({
    type : 'ADD-MESSAGE'
})