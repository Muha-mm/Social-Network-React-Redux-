import React from 'react';
import classes from './Profile.module.css';
import Myposts from './Myposts/Myposts';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) =>{

    return(
        <div>
            <ProfileInfo/>
            <Myposts profilePage = {props.state.profilePage} dispatch = {props.dispatch}/>
        </div>



    )
}

export default Profile;