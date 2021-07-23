// the todo component 
const Todos = (props) => {
    
}


const Todo = (props) => {
  return (
    <div className='Todo'>
    <p className="todo-text">{props.text} <input type="checkbox" /></p>
    </div>
  )
}

export default Todo;
