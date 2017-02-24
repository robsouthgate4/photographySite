
  /**
    * Authenticate a user. Save a token string in Local Storage
    */
   export const authenticateUser = (token) => {
     localStorage.setItem('token', token);
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
   }

   /**
    * Get a token value.
    */

   export const getToken = () => {
     return localStorage.getItem('token');
   }
