import API from "./api";

export const TOKEN_KEY = "@airbnb-Token";
export const ID_USER = "@USER";
export const isAuthenticated = () => localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getID = () => localStorage.getItem(ID_USER);
export const setToken = token => {
  localStorage.setItem(TOKEN_KEY, token);
};
export const setID = id => {
  localStorage.setItem(ID_USER, id);
}
export const logout = () => {
  async function logoutAPI(id = getID()){
    await API.post('/logout/', {
      pk: id
    })
  }
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(ID_USER);
};