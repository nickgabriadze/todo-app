import React from 'react';
import './css/Todo.css';
import NavigationBar from './components/navbar';
import TodoTasks from './components/todoTasks';
import Filter from './components/filter';
import { useSelector } from 'react-redux';

function TodoApp() {

  const {weFilter} = useSelector((state) => state.todoReducer);
 
  return(
    <>
    <NavigationBar />
    { weFilter && <Filter />}
    <TodoTasks />
    </>
  )
}

export default TodoApp;
