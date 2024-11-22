import Header from "./components/header";
import Sidebar from "./components/sidebar"
import ChatArea from "./components/chat";
import { useSelector } from "react-redux";

function Home(){
   const { selectedChat } = useSelector( state => state.useReducer )
   return (
      <div className="home-page">
         <Header/>
         <div className="main-content">
            <Sidebar></Sidebar>
            {selectedChat && <ChatArea></ChatArea>}
         </div>
      </div>

   )
}

export default Home; 