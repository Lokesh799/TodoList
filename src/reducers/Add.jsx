import { ADD_USER } from "../actions";

const initialState = {
  adduser: {
  id:"",
  username:"",
  email:""    
    },
  }

  const addUsers= (state = initialState, action)=> {
    switch (action.type) {
      case ADD_USER:
        return {
          ...state,
          adduser: action.payload,
        };
      default:
        return state;
    }
  }

  export default addUsers;