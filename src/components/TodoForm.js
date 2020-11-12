import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoForm = ({setState, state, todos, setTodos}) => {
    const handleChange = (e) => {
        setState(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([
            ...todos, 
            {
                id: uuidv4(),
                text: state, 
                completed: false
            }
        ])
        setState('');
    }

    return(
        <form>
            <input
            value={state} 
            type="text" 
            className="todo-input"
            onChange={handleChange}
            />
            <button 
            className="todo-button" 
            type="submit"
            onClick={handleSubmit}
            >
            <i className="fas fa-plus-square"></i>
            </button>
        </form>
            
    )
}

export default TodoForm;


