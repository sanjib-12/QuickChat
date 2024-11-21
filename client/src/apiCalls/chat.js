import { axiosInstance } from './index';

//the below code will request to the backend to get all the chat, store and return the data.
export const getAllChats = async () =>{
   try {
      const response = await axiosInstance.get('api/chat/get-all-chats');
      return response.data;
   } catch (error) {
      return error;
   }
}