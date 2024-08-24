import "./Button.css"

function Button({ text, onClick }) {

return(
    <div>
    <button onClick={onClick}>Click</button>
    </div>
)
    
}
export default Button