
import './App.css';
import io from "socket.io-client";
import {useState} from "react";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");
function App() {

 const[username, setUsername] = useState("");
 const[room, setRoom] = useState("");
 const[showChat, setShowChat] = useState(false);

 const joinRoom = () =>{
 if(username !=="" && room !==""){
socket.emit("join_room", room)
setShowChat(true)
 }
 }

 const handleName = (event) => {
  setUsername(event.target.value)
 }

 const handleId = (event) => {
  setRoom(event.target.value)
 }


  return (



    <div className="App">
      {!showChat ?
    (<div className="joinChatContainer">
      <h3>Join A Chat</h3>
    <input type="text" placeholder="John..." onChange={handleName}/>
    <input type="text" placeholder="Room ID" onChange={handleId}/>
    <button onClick={joinRoom}>Join A Room</button>
    </div>)
    : (<Chat socket={socket} username={username} room={room}/>)}
    </div>

    
  );
}

export default App;
