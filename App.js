import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import './App.css';
import Messages from './Messages';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendRoundedIcon from '@material-ui/icons/SendRounded';
import { IconButton } from '@material-ui/core';


function App() {
  const [input, setInput] = useState('');
  const [messages, setMessage] = useState([]);
  const [username, setUsername] = useState('');

  //useState  :: variable in REACT
  //useEffect :: run code on a condition in REACT

  useEffect(() => {
    db.collection('Messages')
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        setMessage(snapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })))
      });
  }, [])

  useEffect(() => {
    //run code here
    setUsername(prompt('Please enter your name'));
  }, [])  //condition

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('Messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setInput('');
  }

  return (
    <div className="App">
      <img className="image" src="data:image/jpeg;base64,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" />
      <h1>Welcome </h1>
      <h2>Hello {username}</h2>
      <form className="app__form">
        <FormControl className="app__formControl">
          <Input className="app__input" placeholder="Enter a message...." value={input} onChange={event => setInput(event.target.value)} />
          <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="" onClick={sendMessage}>
            <SendRoundedIcon />
          </IconButton>
        </FormControl>

      </form>

      <FlipMove  >
        {
          messages.map(({ id, message }) => (
            <Messages key={id} username={username} message={message} />
          ))
        }
      </FlipMove>

    </div>
  );
}

export default App;
