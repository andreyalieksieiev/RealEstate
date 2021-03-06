import {
  CHANGE_INPUT,
  GET_USER, 
  GET_USER_SUCCESS,
  GET_USER_FAIL,
  UP_DATE_PROFILE,
  UP_DATE_PROFILE_SUCCESS,
  UP_DATE_PROFILE_FAIL
} from './actions';

const initialState = {
  isLoading: false,
  error: '',
  success: '',
  firstName: '',
  lastName: '',
  email: '',
  newFirstName: '',
  newLastName: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_INPUT:
      const { name, value } = action.payload;
      return {
        ...state,
        [name]: value
      }
    case GET_USER: 
      return{
        ...state,
        isLoading: false
      }
    case GET_USER_SUCCESS: 
      return {
        ...state,
        isLoading: false,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email
      }
    case GET_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error.message
      }
    case UP_DATE_PROFILE: 
      return{
        ...state,
        isLoading: false
      }
    case UP_DATE_PROFILE_SUCCESS: 
    return {
      ...state,
      isLoading: false,
      newFirstName: action.payload.firstName,
      newLastName: action.payload.lastName,
      email: action.payload.email,
      success: 'Profile changes successfully'
    }
    case UP_DATE_PROFILE_FAIL:
    return {
      ...state,
      isLoading: false,
      error: action.payload.error.message
    }
    default:
      return state
  }
}
