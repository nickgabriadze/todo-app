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
    const { filterBy, mainFilter } = useSelector((state) => state.todoReducer)
    
    return (
        <>
            <div className="todo-tasks" style={{ marginTop: weFilter ? '20px' : '140px' }}>
                {!weFilter && todoTasks.filter(todoTask => mainFilter === '' ? todoTask.taskComplete === false || todoTask.taskComplete === true :todoTask.taskComplete === mainFilter).map((todoTask) => {
                    return (
                        <motion.div
                            initial={{ x: -200 }}
                            animate={{ x: 0 }}
                            transition={{ type: 'spring', duration: 2, stiffness: 100 }}
                            key={todoTask.id} id='todo-task-wrapper'>
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
                        </motion.div>
                    )
                })}

                {weFilter && todoTasks.filter((obj) => obj.taskCategory===filterBy).map((todoTask) => {
                    return (
                        <motion.div 
                        initial={{x: 500}}
                        animate={{x : 0}}
                        transition={{ type: 'spring', duration: 2, stiffness: 100 }}
                        key={todoTask.id} id='todo-task-wrapper'>
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
                        </motion.div>
                    )
                })}


            </div>
        </>
    )
}

export default TodoTasks;
