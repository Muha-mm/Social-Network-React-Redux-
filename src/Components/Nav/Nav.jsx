import React from 'react';
import classes from './Nav.module.css';
import {NavLink} from 'react-router-dom'
import Friends from '../Nav/friends/friends';



const Nav = (props) =>{

    let friends = props.state.Friend
        .map( (f) => <Friends name = {f.friendName} /> )

    return(

        <nav className = {classes.nav}>
            <div className = {classes.item}>
                <NavLink to ='/Profile'  activeClassName = {classes.activeLink}>Profile</NavLink>
          </div>
            <div className = {classes.item}>
                <NavLink to ='/Dialogs'  activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className = {classes.item}>
                <NavLink to ='/News'  activeClassName={classes.activeLink}>News</NavLink>
           </div>
           <div className = {classes.item}>
                <NavLink to ='/Music'  activeClassName={classes.activeLink}>Music</NavLink>
           </div>
           <div className = {classes.item}>
                <NavLink to ='/Settings'  activeClassName={classes.activeLink}>Settings</NavLink>
           </div>
           <div className = {classes.friend}>
               <h3>Друзья</h3>
            <div>
              {friends}
           </div>
           </div>
         </nav>

    )
}

export default Nav;