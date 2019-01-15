import React, {Component} from 'react';
import registerScreens from './components/screens';
import {Navigation} from 'react-native-navigation';

registerScreens();

export default class App extends Component {
  constructor(props) {
    super(props);
    this.startApp();
  }
  startApp() {
    Navigation.events().registerAppLaunchedListener(() => {
      Navigation.setRoot({
        root: {
          component: {
            name: 'LoginScreen'
          }
        },
      });
    });
  }
}