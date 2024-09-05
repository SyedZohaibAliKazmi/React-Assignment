
import Img from "../components/image/Error.png"

function NotFound() {

    return(
        <div>
            <h1 >404 - Page Not Found</h1>
            <div style={{display:"flex", justifyContent: "center", alignItems: "center",}}>
            <img src={Img}alt="Page Not Found"  style={{width:"500px" , height:"500px"}}/>
            </div>
        </div>
    )
    
}

export default NotFound