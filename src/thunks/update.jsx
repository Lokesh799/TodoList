import axios from 'axios';
import { editUser } from '../actions';



export const editUserRequest = ( id) => async (dispatch) => {
  try{
		    axios.get(`http://localhost:3008/users/${id}`).then((response) => {
          console.log(response)
            dispatch(editUser(response.data));    
        });
      }catch(err){
        console.log('err', err);
    }
}

export const PutRequest = (edit, id) => async (dispatch) => {
  try{
		    axios.put(`http://localhost:3008/users/${id}` ,edit).then((response) => {
          console.log(response)
            dispatch(editUser(response.data));    
        });
      }catch(err){
        console.log('err', err);
    }
}
