import logo from './image/logo.png'
import './first.css'
function First() {

    return(
        <div id='main'>
            <img src={logo} alt="" />
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#Category">Category</a></li>
                <li><a href="#About">About</a></li>
                <li><a href="#contact">Contact</a></li>
            <button>Account</button>
            </ul>
        </div>
    )
    
}

export default First