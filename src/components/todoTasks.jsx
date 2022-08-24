import React from 'react';
import '../css/todoTasks.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeTaskCompleteStatus } from '../features/todoer';
import { motion } from 'framer-motion';

export function TodoTasks() {
    const dispatch = useDispatch();

    const todoTasks = useSelector((state) => state.todoReducer.todos);
    const { weFilter } = useSelector((state) => state.todoReducer);
    const { filteredTodos } = useSelector((state) => state.todoReducer)
    return (
        <>
            <div className="todo-tasks" style={{ marginTop: weFilter ? '20px' : '140px' }}>
                {!weFilter && todoTasks.map((todoTask) => {
                    return (
                        <div key={todoTask.id} id='todo-task-wrapper'>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px' }}>
                                <div>
                                    <p className='descriptions'>Task Name</p>
                                    <div className='todoStuff'>{todoTask.taskName}</div>
                                </div>
                                <div>
                                    <p className='descriptions'>Task Category</p>
                                    <div className='todoStuff'>{todoTask.taskCategory}</div>
                                </div>
                                <div>
                                    <p className='descriptions'>Task Importance</p>
                                    <div className='todoStuff'>{todoTask.taskImportance}</div>
                                </div>
                                <motion.div

                                    whileTap={{ scale: 0.7 }}
                                    id='check-mark' onClick={() => dispatch(changeTaskCompleteStatus({
                                        todoTaskId: todoTask.id
                                    }))}>
                                    {todoTask.taskComplete ? "✅" : "☑️"}
                                </motion.div>
                            </div>
                        </div>
                    )
                })}

                {weFilter && filteredTodos.map((todoTask) => {
                    return (
                        <div key={todoTask.id} id='todo-task-wrapper'>
                            <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '20px' }}>
                                <div>
                                    <p className='descriptions'>Task Name</p>
                                    <div className='todoStuff'>{todoTask.taskName}</div>
                                </div>
                                <div>
                                    <p className='descriptions'>Task Category</p>
                                    <div className='todoStuff'>{todoTask.taskCategory}</div>
                                </div>
                                <div>
                                    <p className='descriptions'>Task Importance</p>
                                    <div className='todoStuff'>{todoTask.taskImportance}</div>
                                </div>
                                <motion.div

                                    whileTap={{ scale: 0.7 }}
                                    id='check-mark' onClick={() => dispatch(changeTaskCompleteStatus({
                                        todoTaskId: todoTask.id
                                    }))}>
                                    {todoTask.taskComplete ? "✅" : "☑️"}
                                </motion.div>
                            </div>
                        </div>
                    )
                })}


            </div>
        </>
    )
}

export default TodoTasks;
