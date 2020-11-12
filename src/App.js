import React, { useState } from 'react';
import './App.css';

//import the component
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

function App() {
  const [state, setState] = useState('');
  const [todos, setTodos] = useState([])
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <TodoForm 
      state={state} 
      setState={setState}
      todos={todos}
      setTodos={setTodos} 
      />
      <TodoList 
      todos={todos}
      setTodos={setTodos}
      />
    </div>
  );
}

export default App;
