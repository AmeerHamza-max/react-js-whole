import React, { useState } from 'react';
import '../Style.css';

const Todo = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const handleSubmit = () => {
        if (!input.trim()) return; // Prevent adding empty todos

        setTodos((prevTodos) => [
            ...prevTodos,
            {
                text: input,
                id: Math.floor(Math.random() * 1000), // Ensure unique ID
            },
        ]);
        setInput('');
    };

    const removeTodo = (id) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
    };

    return (
        <div className='container'>
            <input 
                type="text" 
                placeholder='New todo' 
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type='submit' onClick={handleSubmit}>Add</button>
            <ul className='todo-list'>
                {todos.map((todo) => (
                    <li key={todo.id} className='todo'>
                        <span>{todo.text}</span>
                        <button className='close' onClick={() => removeTodo(todo.id)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Todo;
