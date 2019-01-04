import { NAME_CHANGED,
         SURNAME_CHANGED,
         EMAIL_CHANGED,
         PASSWORD_CHANGED,
         SIGNUP_USER_SUCCESS,
         SIGNUP_USER_FAIL,
         SIGNUP_USER
} from '../actions/types';

const INITIAL_STATE = {
  name: '',
  surname: '',
  email: '',
  password: '',
  user: null,
  error: '',
  loading: false
};

export default (state = INITIAL_STATE, action)=>{
  switch(action.type){
    case NAME_CHANGED:
      return {...state, name: action.payload};
    case SURNAME_CHANGED:
      return {...state, surname: action.payload};
    case EMAIL_CHANGED:
      return {...state, email: action.payload};
    case PASSWORD_CHANGED:
      return {...state, password: action.payload};
    case SIGNUP_USER:
      return{...state, loading: true, error: ''}
    case SIGNUP_USER_SUCCESS:
      return {...state, ...INITIAL_STATE, user: action.payload};
    case SIGNUP_USER_FAIL:
      return {...state, error: 'Unvalid Email or Password', password:'', loading:false}
    default:
      return state;

  }
}
