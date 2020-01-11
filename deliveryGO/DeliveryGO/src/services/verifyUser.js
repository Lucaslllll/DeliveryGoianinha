import API from './api';

export async function verifyUser(USER_ID, USER_TOKEN){
  try{
    const {data} = await API.post('/verify-token', {
      pk: USER_ID,
      token: USER_TOKEN,
    });
    if(data){
      return true;
    }else{
      return false;  
    }
  }
  catch(err){
    return false;
  }
};