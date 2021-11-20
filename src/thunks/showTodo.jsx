import axios from 'axios';
import { viewTodo } from '../actions';

export const todoRequest = (id) => async (dispatch) => {
  try{
	    axios.get(`http://localhost:3008/users/${id}/todos`).then((response) => {
          console.log(response)
        dispatch(viewTodo(response.data));    
        });
    }catch(err){
      console.log('err', err);
  }
}