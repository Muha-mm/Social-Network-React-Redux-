 import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Profile from './Components/Profile/Profile';
import Nav from './Components/Nav/Nav';
import Dialogs from './Components/Profile/Dialogs/Dialogs';
import News from './Components/Profile/News/News';
import Music from './Components/Profile/Music/Music';
import Settings from './Components/Profile/Settings/Settings';
import {Route} from 'react-router-dom'

const App = (props) => {

  return (
     <div className = 'app-wrapper'>
       <Header/>
       <Nav state = {props.state.sidebar}/>
       <div className = 'app-wrapper-content'>
          <Route path = '/Dialogs' render = {() => <Dialogs state = {props.state.dialogsPage} dispatch = {props.dispatch} /> }/> 
          <Route path = '/Profile' render = { () => <Profile state = {props.state} dispatch = {props.dispatch} />  }/>
          <Route path = '/Music' component = {Music}/>
          <Route path = '/News' component = {News}/>
          <Route path = '/Settings' component = {Settings}/>
       </div>
    </div>
  );
}


export default App;
