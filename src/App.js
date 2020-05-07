import React, { useState } from 'react';
// import logo from './logo.svg';
import './App.css';

function Todo() {

  const Todo = ({ todo }) => <div className="todo">{todo.text}</div>;
  // return (
  //   <div
  //     className="todo"
  //     style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
  //   >
  //     {todo.text}

  //     <div>
  //       <button onClick={() => completeTodo(index)}>Complete</button>
  //       <button onClick={() => removeTodo(index)}>x</button>
  //     </div>
  //   </div>
  // );
}

function App() {
  const [todos, setTodos] = useState([
    { text: "Learn about React" },
    { text: "Meet friend for lunch" },
    { text: "Build really cool todo app" }
  ]);

  // we'll render our todos here ...
  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
