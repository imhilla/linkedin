import { CalendarViewDay, Create, EventNote, Image, Subscriptions } from '@material-ui/icons';
import React, { useState, useEffect } from 'react';
import './Feed.css';
import { db } from './firebase';
import InputOption from './InputOption';
import Post from './Post';
import firebase from 'firebase';

export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('')

  useEffect(() => {
    db.collection('posts').onSnapshot(snapshot => (
      setPosts(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data(),
      })))
    ))
  }, [])

  const sendPost = (e) => {
    e.preventDefault();
    db.collection('posts').add({
      name: 'Hillary Kiptoo',
      description: "This is a test",
      message: input,
      photoUrl: '',
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    })
  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <Create />
          <form>
            <input onChange={e => setInput(e.target.value)} value={input} type="text" />
            <button onClick={sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={Image} title="Photo" color="#7085F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
        </div>
      </div>
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          message={message}
          photoUrl={photoUrl}
        />
      ))}
    </div>
  )
}
