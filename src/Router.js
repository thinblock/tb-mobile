import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginScreen from './components/LoginScreen';
import SignupScreen from './components/SignupScreen';


const RouterComponent = () =>{
  return (
    <Router >
      <Scene key='auth'navigationBarStyle={{backgroundColor:'#2A282F'}} titleStyle={{color:'white'}}se>
        <Scene key='signup' component={SignupScreen} title= 'SIGN UP' />
        <Scene key='login' component={LoginScreen} title= 'SIGN IN' />
      </Scene>
    </Router>
  );
};


export default RouterComponent;
