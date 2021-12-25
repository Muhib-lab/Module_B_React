// import { useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../component/header";
import Slider from "../component/slider";
import Card from "../component/card";
import Footers from "../component/footer";
// import {
//     auth,
//     onAuthStateChanged,
//     signOut
    
// } from "../config/firebaseconfig";


export default function Home() {
    const navigate = useNavigate();
    // useEffect(()=>{
    //     onAuthStateChanged(auth,(user)=>{
    //         if(!user) {
    //             navigate('/signin')
    //         }
    //     })
    // },[])

    return(
        <>

        <Header />
        <Slider />
        <Card />
        <Footers />

        
        {/* <div>
            <button onClick={() => signOut(auth)}>Logout</button>
        </div> */}

        </>
    )
    
}           