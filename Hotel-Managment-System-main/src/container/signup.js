import Input from "../component/input"
import { useState , useEffect} from "react";
import {
    auth,
    createUserWithEmailAndPassword,
    db,
    set,
    ref,
    onAuthStateChanged
} from "../config/firebaseconfig";
import { useNavigate } from "react-router";



export default function Signup() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    let usernameHandle = (e) => {
        setUsername(e.target.value);
    }

    let emailHandle = (e) => {
        setEmail(e.target.value);
    }

    let passwordHandle = (e) => {
        setPassword(e.target.value);

    }

    let onSubmitHandle = (e) => {
        e.preventDefault()
        let obj = {
            username,
            email,
            password
        }

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


},[])

    return(
        <div className='box'>
            <div>
                <h1 className='head'>SIGNUP</h1>
            </div>

        <form onSubmit={(e) => onSubmitHandle(e)}>
            <Input className='bb' type='text' ph='Enter Username' onchangehandle={(e) => usernameHandle(e)} />
            <Input className='bb' type='email' ph='Enter Email' onchangehandle={(e) => emailHandle(e)} />
            <Input className='bb' type='password' ph='Enter Password' onchangehandle={(e) => passwordHandle(e)} />
            <button type="submit" className='bb' style={{borderRadius:'10px',width:'100px'}}>Submit</button>
        </form>

            <div className='wave-one'></div>
            <div className='wave-two'></div>
            <div className='wave-three'></div>


    </div>
    )
    
}