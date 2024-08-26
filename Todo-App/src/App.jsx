import { useState } from 'react'
import './App.css'
import Button from './component/Button';

function App() {

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
   
  ]);

  const addTodo = () => {
    setTodos([...todos, todo]);
  };

  return (
    <div>
      <h1 className='heading'>Work</h1>
      <input
          className="Inp"
          value={todo}
          placeholder="Add Task"
          onChange={(e) => setTodo(e.target.value)}
        />
        <Button  text={"Add"} onClick={addTodo} />
        {todos.map((data, ind) => (
          <h2 className='myH2' key={ind}>
            {data}
            
          </h2>
        ))}
  
    </div>
  )
}

export default App
