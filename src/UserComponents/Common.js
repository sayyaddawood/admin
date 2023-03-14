import axios from 'axios';

export const BASE_URL='https://sofasport.p.rapidapi.com/v1/';
export const header = () => {
  const header = {
    'X-RapidAPI-Key': 'c35b737b5dmsh2eb6f9ef5e7ae4ep184ce1jsn27cb4f7d19c7',
    'X-RapidAPI-Host': 'sofasport.p.rapidapi.com'
  };
  return header;
}

export const getAge = (dob1) => {
  var today = new Date();
  var birthDate = new Date(dob1);  // create a date object directly from `dob1` argument
  var age_now = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) 
  {
      age_now--;
  }
  return age_now;
}
// return the user data from the session storage
// export const getUser = () => {
//   const userStr = sessionStorage.getItem('user');
//   if (userStr) return JSON.parse(userStr);
//   else return null;
// }
 
// // return the token from the session storage
// export const getToken = () => {
//   return sessionStorage.getItem('token') || null;
// }
 
// // remove the token and user from the session storage
// export const removeUserSession = () => {
//   sessionStorage.removeItem('token');
//   sessionStorage.removeItem('user');
// }
 
// // set the token and user from the session storage
// export const setUserSession = (token, user) => {
//   sessionStorage.setItem('token', token);
//   sessionStorage.setItem('user', JSON.stringify(user));
// }