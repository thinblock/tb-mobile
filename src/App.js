import React, { Component } from 'react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import Router from './Router';



class App extends Component {
  componentWillMount(){
    const config = {
     apiKey: "AIzaSyA6FLLEAQ-ACeqYf9xDNcoXp7duCIXg9UU",
     authDomain: "tbauth-7ea44.firebaseapp.com",
     databaseURL: "https://tbauth-7ea44.firebaseio.com",
     projectId: "tbauth-7ea44",
     storageBucket: "tbauth-7ea44.appspot.com",
     messagingSenderId: "385834515660"
    };
      firebase.initializeApp(config);
  }

  render(){
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return(
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}



export default App;
