import { EDIT_USER } from "../actions";

const initialState = {
  editUser: {
  id:"",
  username:"",
  email:""    
    },
  }

  const editUsers= (state = initialState, action)=> {
    switch (action.type) {
      case EDIT_USER:
        return {
          ...state,
          editUser: action.payload,
        };
      default:
        return state;
    }
  }

  export default editUsers;