import { useEffect } from "react";
import { useNavigate } from "react-router";
import {
    auth,
    onAuthStateChanged,
    signOut,
}from '../config/firebaseconfig'

function Home(){

    const navigate= useNavigate(); 

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(!user){
                navigate('/signin')
            }
        })
    })


    return(
        <>
        <h1>Home page</h1>

        <div>
            <button onClick={()=> signOut(auth)}>logout</button>
        </div>
        </>
    )
}

export default Home;
