import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';
import { EMAIL_CHANGED,
         PASSWORD_CHANGED,
         NAME_CHANGED,
         SURNAME_CHANGED,
         LOGIN_USER_SUCCESS,
         LOGIN_USER_FAIL,
         LOGIN_USER,
         SIGNUP_USER_SUCCESS,
         SIGNUP_USER_FAIL,
         SIGNUP_USER,
} from './types';


export const nameChanged = (text)=>{
  return {
    type: NAME_CHANGED,
    payload: text
  }
}


export const surnameChanged = (text)=>{
  return {
    type: SURNAME_CHANGED,
    payload: text
  }
}


export const emailChanged = (text)=>{
  return {
    type: EMAIL_CHANGED,
    payload: text
  }
}


export const passwordChanged = (text) =>{
  return {
    type: PASSWORD_CHANGED,
    payload: text
  }
}

export const loginUser = ({ email, password }) => {
  return (dispatch) => {
    dispatch({ type: LOGIN_USER });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(user => loginUserSuccess(dispatch, user))
      .catch((error) => {
        console.log(error);

        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(user => loginUserSuccess(dispatch, user))
          .catch(() => loginUserFail(dispatch));
      });
  };
};

const loginUserFail = (dispatch) =>{
  dispatch({type: LOGIN_USER_FAIL})
};

const loginUserSuccess = (dispatch, user) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: user
  });

}



export const signupUser = ({ name, surname, email, password}) => {
  return (dispatch) => {
    dispatch({type: SIGNUP_USER});
    firebase.auth().createUserWithEmailAndPassword(email,password)
      .then(user=> signupUserSuccess(dispatch, user))
      .catch(()=> signupUserFail(dispatch));
  }
}


const signupUserFail = (dispatch) =>{
  dispatch({type: SIGNUP_USER_FAIL})
};

const signupUserSuccess = (dispatch, user) => {
  dispatch({
    type: SIGNUP_USER_SUCCESS,
    payload: user
  });

}
