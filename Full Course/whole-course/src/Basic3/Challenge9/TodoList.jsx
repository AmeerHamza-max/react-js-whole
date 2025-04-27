import React, { useState } from 'react'

const TodoList = () => {
  const [todos,setTodos] = useState([]);
  const [inputValue,setInputValue]=useState('');
  const handleSubmit=(e)=>{
    e.preventDefault();
    if(inputValue.trim()){
        setTodos([...todos,inputValue]);
        inputValue('')
    }
  }
  return (
    <div>
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={inputValue} placeholder='add a new todo' onChange={(e)=>setInputValue(e.target.value)} />
        <button type='submit'>Add Todo</button>
      </form>
      <ul>
        {todos.map((m)=>(
            <li key={Math.random()}>{todos}</li>
        ))}
      </ul>
    </div>
  )
}

export default TodoList
