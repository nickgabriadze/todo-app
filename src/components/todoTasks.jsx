import React from 'react';
import '../css/todoTasks.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeTaskCompleteStatus } from '../features/todoer';

export function TodoTasks() {
    const dispatch = useDispatch();

    const todoTasks = useSelector((state) => state.todoReducer.todos);
    

    return (
        <>
            <div className="todo-tasks">
                {todoTasks.map((todoTask) => {
                    return (
                        <div id='todo-task-wrapper'>
                            <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-between'}}> 
                            <div>T: {todoTask.taskName}</div>
                            <div>C: {todoTask.taskCategory}</div>
                            <div>I: {todoTask.taskImportance}</div>
                            <div id='check-mark' onClick={() => dispatch(changeTaskCompleteStatus({
                                todoTaskId: todoTask.id
                            }))}>
                            {todoTask.taskComplete ? "✅": "☑️"}
                            </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TodoTasks;
