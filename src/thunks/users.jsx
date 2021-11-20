import axios from 'axios';
import { getUser } from '../actions';

export const getUsers = () => async (dispatch) => {
  try{
		    axios.get("http://localhost:3008/users").then((response) => {
          console.log(response)
        dispatch(getUser(response.data));    
        });
    }catch(err){
      console.log('err', err);
  }
}