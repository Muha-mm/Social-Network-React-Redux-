import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () =>{
    return(
    <div>
         <div>
            <img src = 'https://d2slcw3kip6qmk.cloudfront.net/marketing/blog/2017Q2/project-planning-header@2x.png'/>
        </div>
        <div className = {classes.description}>
          ava + description
        </div>
    </div>
    )
}

export default ProfileInfo;