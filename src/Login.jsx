import React from 'react';
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from './firebase.init';


const Login = () => {
    const clickHandler = () => {
        console.log('login confirmed!')
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result)
        })
        .catch(error=> {
            console.log(error)
        })
    }
    const provider = new GoogleAuthProvider();
   
    return (
        <div>
            <h3>Login page</h3>
            <button onClick={clickHandler}>Login with google</button>
        </div>
    );
};

export default Login;