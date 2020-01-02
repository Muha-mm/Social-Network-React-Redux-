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
    }

};
export default store;