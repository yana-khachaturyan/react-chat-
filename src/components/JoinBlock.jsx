import React from 'react';
import axios from 'axios';

// import socket from '../socket'


export default function JoinBlock ({onLogin}) {
    const [roomId, setRoomId] = React.useState('');
    const [userName, setUserName] = React.useState('');
    
     const onEnter= () =>{
         if (!roomId || !userName){
          return  alert('wrong detail, try again')
         }
         axios.post('http://localhost:8080/rooms/',{
          roomId,
          userName,
          
         })
         .then(onLogin);
       
     }
   
     return (
        <div>
            <div className='join-block'>
                <input 
                type="text"
                placeholder="Room ID" 
                value={roomId} 
                onChange={e=>setRoomId(e.target.value)}/> 
                <input 
                type="text" 
                placeholder="Your name"  
                value={userName}
                onChange={e=>setUserName(e.target.value)}/> 
                <button onClick={onEnter}  className="btn btn-success">
                Log In
                </button>
            </div>
        </div>
    )
}

