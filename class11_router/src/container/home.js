import { Link } from "react-router-dom";
import About from "./about";
import Service from "./service";

function Home(){
    return(
        <div>
            <h1>home</h1>
            <ul>
                <li><Link to='/' >Home</Link>  </li>
                   <li>  <Link to='/about' >About</Link> </li>
                    <li> <Link to='/service' >Services</Link> </li>
               
            </ul>
        </div>
    )
}

export default Home;