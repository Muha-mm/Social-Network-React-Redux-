let store = {

        _state : {

            profilePage : {

                PostData : [
                    { id: 0, message: "Hi", likeCount: 0 },
                    { id: 1, message: "how", likeCount: 1 },
                    { id: 2, message: "are", likeCount: 2 },
                    { id: 3, message: "you", likeCount: 3 }
                  ],
                newPostText : 'malaev'   
              
            },
            dialogsPage : {
                messages : [
                    {message:'Шома', id: '1'},
                    {message:'русак', id: '2'},
                    {message:'русак', id: '3'},
                    {message:'я', id: '4'}
                ],
                newMessageText : 'malaev',
            
                dialogs : [
                    {name:'Andrew', id: '1'},
                    {name:'Maxim', id: '2'},
                    {name:'Shamil', id: '3'},
                    {name:'Muhammad', id: '4'}
                ]
            },

            sidebar :{
            
                Friend : [
                    {friendName : 'Andrew'},
                    {friendName : 'Andrew'},
                    {friendName : 'Maxim'},
                    {friendName : 'Murad'},
                    {friendName : 'Shamil'},
                    {friendName : 'Shamil'},
                    {friendName : 'Murad'}
            ]
            }
    },
    //end of state
    
    rerenderTree() {
    },
    
    _subscribe(observer) {
        this.rerenderTree = observer;
    },
    getSubscribe(){
        return this._subscribe
    },

    getState() {
        return this._state
    },

    dispatch(action){
        // add-post
        if (action.type === 'ADD-POST'){
            let newPost = {
                id:10,
                message:this._state.profilePage.newPostText,
                likeCount:999
            } 
            this._state.profilePage.PostData.push(newPost);
            this._state.profilePage.newPostText = '';
            this.rerenderTree(this._state)
            }
        //change-post-text
        else if(action.type === 'CHANGE-POST-TEXT'){
            this._state.profilePage.newPostText = action.text;
            this.rerenderTree(this._state);    
        } 
        
        else if (action.type === 'ADD-MESSAGE'){
            let newMessage = {
                id:10,
                message:this._state.dialogsPage.newMessageText,
            }
            this._state.dialogsPage.messages.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this.rerenderTree(this._state)

            }
        else if(action.type === 'CHANGE-MESSAGE-TEXT'){
            this._state.dialogsPage.newMessageText = action.textMessage;
            this.rerenderTree(this._state);    
        }    
    }
    

};
// export let addMessage = () =>{
//     let newMessage = {
//         id:10,
//         message:this._state.dialogsPage.newMessageText,
//     }
//     this._state.profilePage.PostData.push(newMessage);
//     this._state.dialogsPage.newMessageText = '';
//     this.rerenderTree(this._state)    
// }

// export let changeMessageText = (text) =>{
//     this._state.dialogsPage.newMessageText = text;
//     this.rerenderTree(this._state);    
// }

export const changePostText = (text) => ({
    type:'CHANGE-POST-TEXT',
    text:text
  })
  
export const  addPost = () => ({
    type:'ADD-POST'
  })

export const changeMessageText = (text) => ({
    type : 'CHANGE-MESSAGE-TEXT',
    textMessage:text
  })
    
export const sentMessage = () =>({
    type : 'ADD-MESSAGE'
})

export default store;