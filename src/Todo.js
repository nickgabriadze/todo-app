import React from 'react';
import './css/Todo.css';
import NavigationBar from './components/navbar';
import TodoTasks from './components/todoTasks';

function TodoApp() {
  return(
    <>
    <NavigationBar />
    <TodoTasks />
    </>
  )
}

export default TodoApp;
