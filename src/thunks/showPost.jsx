import axios from 'axios';
import { viewPost } from '../actions';

export const postRequest = (id) => async (dispatch) => {
  try{
	    axios.get(`http://localhost:3008/users/${id}/posts`).then((response) => {
          console.log(response)
        dispatch(viewPost(response.data));    
        });
    }catch(err){
      console.log('err', err);
  }
}