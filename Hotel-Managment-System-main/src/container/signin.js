import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import Input from '../component/input'
import {
    auth,signInWithEmailAndPassword, onAuthStateChanged
} from '../config/firebaseconfig'
import '../component/css/style.css'



export default function Signin() {
    const [email,setemail] = useState('')
    const [password,setpassword] = useState('')

    const navigate = useNavigate();

    let emailHandle = (e) => {
        setemail(e.target.value)
    } 

    let passwordHandle = (e) => {
        setpassword(e.target.value)
    }

    let onsubmitHandle = (e) => {
        e.preventDefault()
        let obj ={
            email,
            password
        }

        signInWithEmailAndPassword(auth,obj.email,obj.password)
        .then((success) => {
            console.log('success',success)
            navigate('/')
        })
        .catch((err) =>{
            console.log('error',err.message)
        })
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) =>{
            if (user) {
                navigate('/')
            }
        })
    }, [])

    return(
        <div className='box'>
            <div>
                <h1 className='head'>SIGNIN</h1>
            </div>
            <form onSubmit={(e)=>onsubmitHandle(e)}>
                <Input className='bb' type='Email' ph='Enter Email' onchangehandle={(e)=>emailHandle(e) } />
                <Input className='bb' type='password' ph='Enter Password' onchangehandle={(e)=>passwordHandle(e) } />
                <button className='bb' style={{borderRadius:'10px',width:'100px'}} >SUBMIT</button>
            </form>
            <div>
                <button className='bb' style={{borderRadius:'10px',width:'170px'}} onClick={()=> navigate('/signup')}>Create New Account</button>
            </div>

            <div className='wave-one'></div>
            <div className='wave-two'></div>
            <div className='wave-three'></div>
        </div>

    )
    
}