
import Button from './button'
import logo from './image/logo.png'
import { Link, useNavigate } from "react-router-dom";
import './Nav.css'
import { signOut } from 'firebase/auth';
import { auth } from "../utilis/firebase"
function Navbar() {
    
    const navigate = useNavigate()

    function handlebutton() {

        navigate("/signup")
        
    }

    async function handlelogout() {

    const logout =  await signOut(auth)
    console.log("logout hogaya");
    
      navigate("/")
        
    }


    return(
        
        <div id='main1'>
            <img src={logo} alt="" />
            <ul>
                <li><Link to ="Home">Home</Link></li>
                <li><Link to ="Category">Category</Link></li>
                <li><Link to ="About">About</Link></li>
                <li><Link to ="Contact">Contact</Link></li>
                {/* <li><Link>User</Link></li> */}
                <Button text = {"Logout"} onClick={handlelogout} /> 
               <Button text= {"Account"} onClick={handlebutton}/>
            </ul>
        </div>
    )
    
}

export default Navbar