import {Navigation} from 'react-native-navigation';
import LoginScreen from './LoginScreen/LoginScreen';
export default () => {
  Navigation.registerComponent('LoginScreen', () => LoginScreen);
}