
export const GET_USER = 'GET_USER';
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const VIEW_TODO = 'VIEW_TODO';
export const VIEW_POST = 'VIEW_POST';
export const VIEW_COMMENT = 'VIEW_COMMENT';
export const SHOW_MODEL = 'SHOW_MODEL';



export const getUser = (payload) => ({ type: GET_USER, payload });
export const addUser = (payload) => ({ type: ADD_USER, payload });
export const editUser = (payload) => ({ type: EDIT_USER, payload });
export const viewTodo = (payload) => ({ type: VIEW_TODO, payload });
export const viewPost = (payload) => ({ type: VIEW_POST, payload });
export const viewComment = (payload) => ({ type: VIEW_COMMENT, payload });
export const showModel = (payload) => ({ type: SHOW_MODEL, payload });
