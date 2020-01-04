export let profileReducer = (state, action) =>{

    switch (action.type) {
        case 'ADD-POST':
            let newPost = {
                id:10,
                message:state.newPostText,
                likeCount:999
            } 
            state.PostData.push(newPost);
            state.newPostText = '';
            return state;

        case 'CHANGE-POST-TEXT':
                state.newPostText = action.text;
                return state;
            
        default:
                return state;
                
        }
}

export const changePostText = (text) => ({
    type:'CHANGE-POST-TEXT',
    text:text
  })
  
export const  addPost = () => ({
    type:'ADD-POST'
  })
