
export const GET_USER = 'GET_USER'
export const ADD_USER = 'ADD_USER';
export const EDIT_USER = 'EDIT_USER';
export const VIEW_TODO = 'VIEW_TODO';
export const VIEW_COMME = 'VIEW_COMME';



export const getUser = (payload) => ({ type: GET_USER, payload });
export const addUser = (payload) => ({ type: ADD_USER, payload });
export const editTodo = (payload) => ({ type: EDIT_USER, payload });
export const viewTodo = (payload) => ({ type: VIEW_TODO, payload });
export const viewComme = (payload) => ({ type: VIEW_COMME, payload });
