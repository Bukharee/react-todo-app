import './App.css';
import Todo from "./Todo";
import { useState } from "react";

const TODOS = [{text:'finish eama', id:1}, 
{text:'go back to school', id:2}, 
{text:'carry out some things to market', id:3}]


function App() {
  const [todo, setTodo] = useState("kano")
  const addTodo = () => {
    
  }
  return (
    <div className="App">
      <header className="App-header">
      {
        TODOS.map((todo) => (
          <Todo text={todo.text} key={todo.id} />
        ))
      }
      </header>
      <form>
      <input value={todo} type="text" onChange={ (e) => { setTodo(e.target.value)}}/>
      <button id="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
