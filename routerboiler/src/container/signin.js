import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import Input from '../component/input';
import {
    auth,signInWithEmailAndPassword,onAuthStateChanged
} from '../config/firebaseconfig'

function Signin(){
    const navigate = useNavigate()

    const[email,setemail] = useState('')
    const[password,setpassword] = useState('')

    let emailhandle = (e) =>{
        setemail(e.target.value)
    }

    let passwordhandle = (e) =>{
        setpassword(e.target.value)
    }

    let onsubmithandle = (e) =>{
        e.preventDefault()

        let obj = {
            email,
            password
        }

        signInWithEmailAndPassword(auth,obj.email,obj.password)
        .then((success)=>{
            console.log('success',success)
            navigate('/')
        })
        .catch((err) => {
            console.log('error',err.message)
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate('/')
            }
        })
    },[])




    return(
        <>
        <h1>Signin page</h1>

        <form onSubmit={(e)=> onsubmithandle(e)}>
            <Input type='text' ph='Enter email' onchangehandle={(e) => emailhandle(e)} />
            <Input type='text' ph='Enter Password' onchangehandle={(e) => passwordhandle(e)} />
            <button>Submit</button>
        </form>


        </>
    )
}

export default Signin;
