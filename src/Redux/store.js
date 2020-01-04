import {dialogsReducer} from './reducer/dialogsPageReducer';
import {profileReducer} from './reducer/profilePageReducer';
import {sideBarReducer} from './reducer/sideBarReducer';

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
                    {message:'Sandy', id: '1'},
                    {message:'HI', id: '2'},
                    {message:' h r u?', id: '3'},
                    {message:'got a job as a react developer?', id: '4'}
                ],
                newMessageText : 'yes, almost...',
            
                dialogs : [
                    {name:'Andrew', id: '1'},
                    {name:'Maxim', id: '2'},
                    {name:'Sandy', id: '3'},
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
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.sidebar = sideBarReducer(this._state.sidebar, action);

        this.rerenderTree(this._state);
    }
     
};

export default store;