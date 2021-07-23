import './App.css';
import Todo from "./Todo";
import { useState } from "react";

const TODOS = []


function App() {
  const [todos, setTodos] = useState([{text:'finish eama', id:1, done:false}, 
  {text:'go back to school', id:2, done:false}, 
  {text:'carry out some things to market', id:3, done:false}])
  const [todo, setTodo] = useState("im trying my best to learn react");
  function onSubmit(e) {
    e.preventDefault()
    console.log("nayi submitting")
    if (!todo) {
      alert('add a task');
    } else {
      console.log('one ')
      setTodos(
        prev => {
          return [...prev, {text: todo, id:4}]
        }
      );
      setTodo("")
    }
  }
  function deleteTodo(id) {
    setTodos(
      todos.filter(
        (my_todo) => 
          my_todo.id !== id
           )
        )
    
    console.log(`delete${id}`)
  }


  return (
    <div className="App">
      <header className="App-header">
      {
        todos.map((todo) => (
          <Todo text={todo.text} key={todo.id} onDelete={deleteTodo} todo={todo.id}/>
        ))
      }
      </header>
      <form onSubmit={onSubmit}>
      <input value={todo} type="text" onChange={ (e) => { setTodo(e.target.value)}}/>
      <button id="submit" onClick={onSubmit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
