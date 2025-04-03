import React from 'react';

const Login = () => {
    const clickHandler = () => {
        console.log('login confirmed!')
    }
    return (
        <div>
            <h3>Login page</h3>
            <button onClick={clickHandler}>Login with google</button>
        </div>
    );
};

export default Login;