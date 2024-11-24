import { useDispatch, useSelector } from "react-redux";
import { createNewMessage, getAllMessages } from "../../../apiCalls/message";
import { hideLoader, showLoader } from "../../../redux/loaderSlice";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";


function ChatArea(){
   const dispatch = useDispatch();
   const { selectedChat, user } = useSelector(state => state.useReducer);
   const selectedUser = selectedChat.members.find( u => u._id !== user._id);
   const [message, setMessage] = useState('');
   const [allMessages, setAllMessages] = useState('');

   const sendMessage = async() =>{
      try {
         const newMessage = {
            chatId: selectedChat._id,
            sender: user._id,
            text: message
         }
         dispatch(showLoader());
         const response = await createNewMessage(newMessage);
         dispatch(hideLoader());
         if(response.success){
            setMessage('');
         }
      } catch (error) {
         dispatch(hideLoader());
         toast.error(error.message);
      }
   }

   const getMessages = async() =>{
      try {
         dispatch(showLoader());
         const response = await getAllMessages(selectedChat._id);
         dispatch(hideLoader());
         if(response.success){
            setAllMessages(response.data);
         }
      } catch (error) {
         dispatch(hideLoader());
         toast.error(error.message);
      }
   }

   useEffect(() =>{
      getMessages();
   },[selectedChat])
   
   return (<>
            {selectedChat && <div className="app-chat-area">
               <div className="app-chat-area-header">
                     { selectedUser.firstname + ' ' + selectedUser.lastname }
               </div>
               <div className="main-chat-area">
                  
                  CHAT AREA
               </div>
               <div>  
                  <div className="send-message-div">
                     <input 
                        type="text" 
                        className="send-message-input" 
                        placeholder="Type a message" 
                        value = {message}
                        onChange = {(e)=>{
                           setMessage(e.target.value);
                        }}
                     />
                     <button 
                        className="fa fa-paper-plane send-message-btn" 
                        aria-hidden="true"
                        onClick = {sendMessage}
                     >
                     </button>
                  </div>
               </div>
            </div>}
         </>)
}

export default ChatArea;