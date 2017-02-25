
  /**
    * Authenticate a user. Save a token string in Local Storage
    */
   export const authenticateUser = (token, user) => {
     localStorage.setItem('token', token);
     localStorage.setItem('user', user);
   }

   /**
    * Check if a user is authenticated - check if a token is saved in Local Storage
    */
   export const isUserAuthenticated = () => {
     return localStorage.getItem('token') !== null;
   }

   /**
    * Deauthenticate a user. Remove a token from Local Storage.
    */
   export const deauthenticateUser = () => {
     localStorage.removeItem('token');
     localStorage.removeItem('user');
   }

   /**
    * Get a token value.
    */

   export const getToken = () => {
     return localStorage.getItem('token');
   }
