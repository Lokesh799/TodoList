import { VIEW_COMMENT } from "../actions";

const initialState = {
  viewComment: [],
  }

  const viewComments= (state = initialState, action)=> {
    switch (action.type) {
      case VIEW_COMMENT:
        return {
          ...state,
          viewComment: action.payload,
        };
      default:
        return state;
    }
  }

  export default viewComments;