
import { combineReducers } from 'redux';
import users from './User'
import addUsers from './Add';
import viewTodos from './viewTodo';
import viewPosts from './viewPost';
import editUsers from './editUser';
import viewComments from './viewComment';

const reducer= combineReducers({
  users,
  addUsers,
  viewTodos,
  viewPosts,
  editUsers,
  viewComments,

  
});
export default reducer;