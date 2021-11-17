import { VIEW_POST } from "../actions";

const initialState = {
  viewPost: [],
  }

  const viewPosts= (state = initialState, action)=> {
    switch (action.type) {
      case VIEW_POST:
        return {
          ...state,
          viewPost: action.payload,
        };
      default:
        return state;
    }
  }

  export default viewPosts;