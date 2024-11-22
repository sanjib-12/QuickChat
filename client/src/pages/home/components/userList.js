import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import { createNewChat } from "../../../apiCalls/chat";
import { hideLoader, showLoader } from "../../../redux/loaderSlice";
import { setAllChats, setSelectedChat } from "../../../redux/usersSlice";

function UserList({searchKey}){
   const {allUsers, allChats, user: currentUser, selectedChat} = useSelector(state => state.useReducer);
   const dispatch = useDispatch();

   const startNewChat = async(searchedUserId) =>{
      let response = null
      try {
         dispatch(showLoader());
         response = await createNewChat([currentUser._id, searchedUserId]);
         dispatch(hideLoader());

         if(response.success){
            toast.success(response.message);
            const newChat = response.data;
            const updatedChat = [...allChats, newChat];
            dispatch(setAllChats(updatedChat));
            dispatch(setSelectedChat(newChat));
         }
      } catch (error) {
         dispatch(hideLoader())
         toast.error(response.message);
      }
   }

   const openChat = (selectedUserId) => {
      const chat = allChats.find(chat => chat.members.map( m  => m._id).includes(selectedUserId) && chat.members.map( m  => m._id).includes(currentUser._id));

      if(chat){
         dispatch(setSelectedChat(chat))
      }
   }

   const isSelectedChat = (user) => {
      if(selectedChat){
         return selectedChat.members.map( m => m._id).includes(user._id);
      }
      return false;
   }

   return(
      allUsers
      .filter(user =>{
         return (
            (
               (user.firstname.toLowerCase().includes(searchKey.toLowerCase()) ||
               user.lastname.toLowerCase().includes(searchKey.toLowerCase())
               ) && searchKey 
            ) || (allChats.some(chat => chat.members.map( m  => m._id).includes(user._id))) 
         )
      })
      .map(user => {
         return(     
            
            <div key={user._id} className="user-search-filter" onClick ={() => openChat(user._id)}>
               <div className={isSelectedChat(user) ? "selected-user" : "filtered-user"}>
                  <div className="filter-user-display">
                     {user.profilePic && <img src={user.profilePic} alt="Profile Pic" className="user-profile-image"/>}
                     {!user.profilePic && <div className={isSelectedChat(user) ? "user-selected-avatar" : "user-default-avatar"}>
                           {user.firstname.charAt(0).toUpperCase() + user.lastname.charAt(0).toUpperCase()}
                     </div>}
                     <div className="filter-user-details">
                        <div className="user-display-name">{user.firstname + ' ' + user.lastname}</div>
                        <div className="user-display-email">{user.email}</div>
                     </div>
                     {!allChats.find(chat => chat.members.map( m  => m._id).includes(user._id)) &&
                     <div className="user-start-chat">
                        <button className="user-start-chat-btn" onClick={() => startNewChat(user._id) }>Start Chat</button>
                     </div>}
                  </div>
               </div>
            </div>
         )
      })
   )
}

export default UserList;
