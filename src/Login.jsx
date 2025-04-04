import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "./firebase.init";
import { useState } from "react";

const provider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {

    const clickHandler = () => {
        signInWithPopup(auth, provider)
        .then((result)=>{
            console.log(result)
            setuser(result.user)
        })
        .catch(err => {
            console.log(err)
            setuser(null)
        })
    }
    const handlesignOut = () =>{
        signOut(auth)
        .then(()=>{
            setuser(null)
        })
        .catch(()=>{
            console.log('found err')
        })
        
    }
    const handlegithub = () => {
        signInWithPopup(auth,githubProvider)
        .then((result)=>{
            setuser(result.user)
        })
        .catch(()=>{
            setuser(null)
        })
    }
    const [user, setuser] = useState(null);
    return (
        <div>
            <h3>Login page</h3>
            
            {user? <button onClick={handlesignOut}>Sign out</button>:
            <>
            <button onClick={clickHandler}>Login with google</button>
            <button onClick={handlegithub}>Login with github</button>
            </>
            }
            {
                user && <div>
                    <h3>{user.displayName
                }</h3>
                <h3>Email: {user.email}</h3>
                <img  src={user.photoURL}  alt="User Profile" width="100" height="100" />
                </div>
                
            }
        </div>
    );
};

export default Login;