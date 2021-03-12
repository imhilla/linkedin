import React, { useState } from 'react';
import './Login.css';
import { auth } from './firebase';
import { useDispatch } from 'react-redux';
import { login } from '../src/features/userSlice';

function Login() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [profilePic, setprofilePic] = useState('');
  const dispatch = useDispatch()

  const register = () => {
    if (!name) {
      return alert('Please enter a full name');
    }

    auth.createUserWithEmailAndPassword(email, password).then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoUrl: profilePic
      }).then(() => {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: name,
          photoUrl: profilePic,
        }));
      })
    }).catch(error => {
      alert(error.message)
    })
  }

  const loginToApp = (e) => {
    e.preventDefault()
     auth.signInWithEmailAndPassword(email, password).then(userAuth =>{
       dispatch(login({
        email: userAuth.user.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        photoUrl: userAuth.user.photoURL,
       }))
     }).catch(error => alert(error))
  }

  return (
    <div className="login">
      <img
        src="https://f.hubspotusercontent30.net/hubfs/2235233/blog-import/2020/20-08-Aug/sm-icons-linkedin-logo.png"
        alt=""
      />
      <form>
        <input value={name} onChange={(e) => { setName(e.target.value) }} placeholder="Full name (required if registering)"
          type="text"
        />
        <input value={profilePic} onChange={(e) => { setprofilePic(e.target.value) }} placeholder="Profile picture URL(Optional)"
          type="text"
        />
        <input value={email} onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"
          type="email"
        />
        <input value={password} onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"
          type="password"
        />
        <button type="submit" onClick={loginToApp}>Sign In</button>
      </form>
      <p>Not a member?{' '} <span onClick={register} className="login__register">Register now</span></p>
    </div>
  )
}

export default Login
