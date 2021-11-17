import { VIEW_TODO } from "../actions";

const initialState = {
  viewTodo: [],
  }

  const viewTodos = (state = initialState, action)=> {
    switch (action.type) {
      case VIEW_TODO:
        return {
          ...state,
          viewTodo: action.payload,
        };
      default:
        return state;
    }
  }

  export default viewTodos;