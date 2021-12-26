import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    auth,
    createUserWithEmailAndPassword,
    db,
    set,
    ref,
    onAuthStateChanged
} from "../config/firebaseConfig"



function Signup(){
    const navigate = useNavigate();

    const [username , setUsername] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    let userNameHandle = (e) => {
        setUsername(e.target.value)
    }

    let emailHandle = (e) => {
        setEmail(e.target.value)
    }

    let passwordHandle = (e) => {
        setPassword(e.target.value)
    }

    let onSubmitHandle = (e) => {
        e.preventDefault()
        let obj ={
            username,
            email,
            password
        }
        console.log(obj)

        createUserWithEmailAndPassword(auth, obj.email, obj.password)
        .then((success) => {

            const userId = success.user.uid

            set(ref(db, 'users/' + userId), {
                ...obj,
                userId
            })
            .then(()=>{

                console.log('Data sucessfully stored');
            })
            
            navigate('/')
        })
        .catch((err) => {
            console.log('error', err.message);
        })
    }


    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if(user){
                navigate('/')
            }
        })
    } )







    return(
        <>
        <h1>Sign Up Page</h1>

        <form onSubmit={ (e) => onSubmitHandle (e) } >

            <input type="text" placeholder="Enter user name" onChange={(e) => userNameHandle (e)} />
            <input type="email" placeholder="Enter email" onChange={(e) => emailHandle (e) } />
            <input type="password" placeholder="Enter password" onChange={(e) => passwordHandle (e) } />
            <button type="submit">Submit</button>

        </form>
        </>
    )
}

export default Signup;