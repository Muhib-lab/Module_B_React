import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    auth,
    signInWithEmailAndPassword,
    onAuthStateChanged
}from '../config/firebaseConfig'




function Signin(){
    const navigate = useNavigate();

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('');

    let emailHandle = (e) => {
        setEmail(e.target.value)
    }

    let passwordHandle = (e) => {
        setPassword(e.target.value)
    }

    let onSubmitHandle = (e) => {
        e.preventDefault()
        let obj={
            email,
            password
        }
        console.log(obj)

        signInWithEmailAndPassword(auth,obj.email,obj.password)
        .then((success) => {
            console.log('success',success)
            navigate('/')
        })
        .catch((err) => {
            console.log('error',err.message)
        })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                navigate('/')
            }
        } )
    },[] )






    return(
        <>
        <h1>Signin</h1>
        
        <form onSubmit={(e) => onSubmitHandle (e)}>

        <input type="email" placeholder="Enter email" onChange={(e) => emailHandle(e) } />
        <input type="password" placeholder="Enter password" onChange={(e) => passwordHandle(e) } />
        <button>Submit</button>
        
        </form>

        </>
    )
}

export default Signin;