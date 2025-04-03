import React from 'react';
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const clickHandler = () => {
        console.log('login confirmed!')
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