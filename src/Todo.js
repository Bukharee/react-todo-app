// the todo component 


const Todo = (props) => {
  return (
    <div className='Todo'>
    <p className="todo-text">{props.text} <input type="checkbox" style={{backgroundColor: 'orange', 
    color: 'red'}}/> <button className="delete" onClick={() => props.onDelete(props.todo)}>delete</button></p>
    </div>
  )
}

export default Todo;
