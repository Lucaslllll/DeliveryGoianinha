import API from './api';

import {deleteItem} from './AsyncStorage';

export async function logout(USER_ID) {
  try{
    deleteItem('@USER_ID');
    deleteItem('@USER_TOKEN');
    await API.post('/logout/', {
      pk: USER_ID,
    });
  }
  catch(err){
    console.log('Logout error: ' + err)
  }
}
