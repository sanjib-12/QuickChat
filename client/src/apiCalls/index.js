import axios from "axios";

//Creates an axios instance with the authorization included in the header.
//Using this instance throughout the application, request can be made to the backend containing the token.
export const axiosInstance = axios.create({
   headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`
   }
});


