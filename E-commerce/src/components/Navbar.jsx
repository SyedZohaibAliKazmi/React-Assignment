
import Button from './button'
import logo from './image/logo.png'
import { Link, useNavigate } from "react-router-dom";
import './Nav.css'
function Navbar() {

    return(
        <div id='main'>
            <img src={logo} alt="" />
            <ul>
                <li><Link to ="Home">Home</Link></li>
                <li><Link to ="Category">Category</Link></li>
                <li><Link to ="About">About</Link></li>
                <li><Link to ="Contact">Contact</Link></li>
               <Button text= "Account"/>
            </ul>
        </div>
    )
    
}

export default Navbar