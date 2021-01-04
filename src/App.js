import React, { useState, useEffect } from 'react';
import { FormControl,  Input } from '@material-ui/core';
import Message from'./Message.js';
import db from './firebase.js';
import firebase from 'firebase';
import Flipmove from 'react-flip-move'
import './App.css';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState ('');
  const[messages, setMessages] = useState([]);
  const[username, setUsername] = useState('');

 useEffect(() =>{
    db.collection('messages')
    .orderBy('timestamp','desc')
    .onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc =>({id:doc.id, message:doc.data()})))
    })
 },[])

  useEffect(() => {
    //run code on a condition in REACT
    setUsername(prompt('Please enter your username'))
  }, [] )

  const sendMessage = (event) => {
      event.preventDefault();

      db.collection('messages').add({
        message:input,
        username:username,
        timestamp:firebase.firestore.FieldValue.serverTimestamp()
        
      }) 
      setInput('');
      
  } 

  return (
    <div className="App">
      <img alt= '' src ='https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399'/>
      <h1>Hello Programmers 👌</h1>
      <h2>Welcome {username}</h2>

      <form className= 'app_form'>
        <FormControl className='app_formControl'>
          <Input className='app_Input' placeholder='Enter a message ...' value = {input} onChange = {event => setInput(event.target.value)}/>
          <IconButton className='app_IconButton' disabled={!input} variant ='contained' color = 'primary' type = 'submit' onClick = {sendMessage}>
            <SendIcon/>
          </IconButton>
        </FormControl> 
      </form>
     
     
    <Flipmove>
      {
        messages.map(({id, message}) => (
          <Message key={id} username= {username} message = {message}/>
        ))
      }
    </Flipmove>
    




    </div>
  );
}

//flipmove is for annimation//  

export default App;
