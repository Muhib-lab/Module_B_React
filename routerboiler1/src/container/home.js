import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, onAuthStateChanged, signOut } from "../config/firebaseConfig";


function Home(){
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth,(user)=>{
            if(!user) {
                navigate('/signin')
            }
        })
    },[])

    return(
        <>
        <h1>Home Page</h1>



        <div>
            <button onClick={() => signOut(auth) } >Log out</button>
        </div>


        </>
    )
}

export default Home;