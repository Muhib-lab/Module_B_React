import { useParams } from "react-router";

function Profile(){
    const perams = useParams()

    return(
        <h1>{perams.username}</h1>
    )
}

export default Profile;