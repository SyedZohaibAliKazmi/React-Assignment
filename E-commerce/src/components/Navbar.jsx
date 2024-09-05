
import Button from './button'
import logo from './image/logo.png'
import './Nav.css'
function Navbar() {

    return(
        <div id='main'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#Category">Category</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#contact">Contact</a></li>
               <Button text= "Account"/>
            </ul>
        </div>
    )
    
}

export default Navbar