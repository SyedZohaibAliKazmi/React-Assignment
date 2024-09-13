import './Button.css'
import gif from './image/loading.gif'


function Button({ text, onClick , isloading}) {

  return (
    <button
      onClick={onClick}>
      {/* {text } */}
      {isloading ?<img src={gif}/> : text}
    </button>
  );
}

export default Button;
