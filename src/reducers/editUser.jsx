import { EDIT_USER } from "../actions";
import { SHOW_MODEL } from "../actions";

const initialState = {
  editUser: {
  id:"",
  username:"",
  email:""    
    },
    show:true }

  const editUsers= (state = initialState, action)=> {
    switch (action.type) {
      case EDIT_USER:
        return {
          ...state,
          editUser: action.payload,
        };

        case SHOW_MODEL:
        return {
          ...state,
          show: action.payload,
        };
      default:
        return state;
    }
  }

  

  export default editUsers;