import { useSelector } from "react-redux";

function Header(){

   const { user } = useSelector(state => state.useReducer);

   function getFullname(){
      let fname = user?.firstname.toUpperCase();
      let lname = user?.lastname.toUpperCase();
      return fname + ' ' + lname;
   }

   function getInitials(){
      let f = user?.firstname.toUpperCase()[0];
      let l = user?.lastname.toUpperCase()[0];
      return f+l;
   }

   return(
         <div className="app-header">
      <div className="app-logo">
         <i className="fa fa-comments" aria-hidden="true"></i>
            Quick Chat
         </div>
      <div className="app-user-profile">
         <div className="logged-user-name">{getFullname() || "Guest User"}</div>
         <div className="logged-user-profile-pic">{getInitials() || "GU"}</div>
      </div>
   </div>

   )
}

export default Header;