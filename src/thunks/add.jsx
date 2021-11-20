import axios from 'axios';
import { addUser } from '../actions';

export const addUserRequest = (addUsers) => async (dispatch) => {
  try{
		    axios.post("http://localhost:3008/users" ,addUsers).then((response) => {
          console.log(response)
            dispatch(addUser(response.data));    
        });
      }catch(err){
        console.log('err', err);
    }
}