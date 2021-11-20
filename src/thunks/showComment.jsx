import axios from 'axios';
import { viewComment } from '../actions';

export const commentRequest = (id) => async (dispatch) => {
  try{
	    axios.get(`http://localhost:3008/users/${id}/posts`).then((response) => {
          console.log(response)
        dispatch(viewComment(response.data));    
        });
    }catch(err){
      console.log('err', err);
  }
}