import Input from "../component/input"
import { useState, useEffect } from "react";
import {
    auth,
    db,
    set,
    ref,
    onAuthStateChanged,push, child
} from "../config/firebaseconfig";
import { useNavigate } from "react-router";



export default function About() {
    const navigate = useNavigate()

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [cnic, setCnic] = useState('')
    const [phone, setPhone] = useState('')
    const [day, setDay] = useState('')
    // const [obj, setobj] = useState()

    let onSubmitHandle = (e) => {
        e.preventDefault()

        let obj = {username,
            email,
            cnic,
            phone,
            day}
        // setobj([{}])

        const newPostKey = push(child(ref(db), 'details')).key;
            obj.bookingKey = newPostKey
        console.log(obj)
        set(ref(db, `details/${newPostKey}`),obj)     
            .then(() => {
                console.log('Data saved successfully')
            })
            .catch((error) => {
                // The write failed...
            });
    }






    return (
        <div className='box'>
            <div>
                <h1 className='head'>Booking</h1>
            </div>


            <form onSubmit={(e) => onSubmitHandle(e)}>
                <input style={{ borderRadius: '20px',margin:'10px' }} className='bb' value={username} type='text' placeholder="Enter username" onChange={(e) => setUsername(e.target.value)} /> 
                <input style={{ borderRadius: '20px',margin:'10px' }} className='bb' value={email} type='email' placeholder='Enter Email' onChange={(e) => setEmail(e.target.value)} />
                <input style={{ borderRadius: '20px',margin:'10px' }} className='bb' value={phone} type='number' placeholder='Enter phone no' onChange={(e) => setPhone(e.target.value)} />
                <input style={{ borderRadius: '20px' ,margin:'15px'}} className='bb' value={day} type='number' placeholder='Enter day' onChange={(e) => setDay(e.target.value)} />

                <button type="submit" className='bb' style={{ borderRadius: '10px', width: '150px',margin:'10px' }}>Submit</button>
            </form>

            <button type="submit" className='bb' onClick={()=> navigate('/')} style={{borderRadius:'10px',width:'100px'}}>Back</button>

            <div className='wave-one'></div>
            <div className='wave-two'></div>
            <div className='wave-three'></div>


        </div>
    )

}




