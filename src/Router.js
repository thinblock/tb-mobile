import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';



const RouterComponent = () =>{
  return (
    <Router >
      <Scene key='auth'navigationBarStyle={{backgroundColor:'#2A282F'}} titleStyle={{color:'white'}}se>
        <Scene key='login' component={LoginForm} title= 'LOG IN' />
      </Scene>
    </Router>
  );
};


export default RouterComponent;
