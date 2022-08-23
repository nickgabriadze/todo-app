import React, { useState } from "react";
import '../css/newTask.css';
import { motion } from 'framer-motion';
import GoBack from '../icons/go-back.svg';
import { Link } from 'react-router-dom';
import { checkTask } from '../utils/checkTask.js';
import { addTask } from "../features/todoer";
import { useDispatch } from "react-redux";


export function NewTask() {
    const dispatch = useDispatch();

    const [important, setImportant] = useState({
        Low: false,
        High: false,
        Extreme: false
    });

    const [task, setTask] = useState({
        name: '',
        category: ''
    });

    const [add, setAdd] = useState('');


    const [weShouldPost, setWeShouldPost] = useState(false);


    return (

        <>

            <div className="add-new-task">
                <Link to='/'> <motion.img whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.8 }}
                    initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', duration: 2, stiffness: 100 }}
                    id='go-back' src={GoBack} /></Link>
                <motion.h1 initial={{ y: -100 }}
                    animate={{ y: 0 }}
                    transition={{ type: 'spring', duration: 2, stiffness: 100 }}
                    id='new-task-main-text'
                    style={{ fontFamily: ['Silkscreen', 'monospace', 'sans-serif'], textAlign: 'center' }}>Add New Task</motion.h1>


                <motion.div className='input-field' animate={{ opacity: [0, 0.1, 0.3, 0.5, 0.8, 1] }} transition={{ duration: 1 }}>
                    <div id='inputs'>
                        <div>
                            <h2>Task Name</h2>
                            <motion.input animate={{ x: [-200, 0] }} value={task.name} onChange={(e) => {
                                setTask({ ...task, name: e.target.value }); setAdd('');
                               
                            }}></motion.input>
                        </div>
                        <div>
                            <h2>Task Category</h2>
                            <motion.input animate={{ x: [200, 0] }} value={task.category} onChange={(e) => {
                                setTask({ ...task, category: e.target.value }); setAdd('');
                              
                            }}></motion.input>
                        </div>
                        <div>
                            <h2>Task Importance</h2>
                            <motion.div id='important-buttons' style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
                                <motion.div
                                    animate={{ x: [-100, 20, 0] }}
                                    transition={{ type: 'spring', duration: 1, stiffness: 400 }}
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.05 }} style={{ color: important.Low ? 'red' : 'black' }}
                                    onClick={() => {
                                        setImportant({ ...important, Low: true, High: false, Extreme: false }); setAdd('');
                                      
                                    }}>Low</motion.div>
                                <motion.div
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ color: important.High ? 'red' : 'black' }}
                                    onClick={() => {
                                        setImportant({ ...important, Low: false, High: true, Extreme: false }); setAdd('');
                                     
                                    }}
                                >High</motion.div>
                                <motion.div
                                    animate={{ x: [100, -20, 0] }}
                                    transition={{ type: 'spring', duration: 1, stiffness: 400 }}
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ color: important.Extreme ? 'red' : 'black' }} onClick={() => {
                                        setImportant({ ...important, Low: false, High: false, Extreme: true }); setAdd('');
                                      
                                    }}
                                >Extreme</motion.div>
                            </motion.div>
                        </div>
                        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center', gap: '15px', justifyContent: 'center', alignItems: 'center' }} >
                            <motion.div
                                animate={{ y: [100, 0] }}
                                transition={{ type: 'spring', duration: 1, stiffness: 100 }}
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => {
                                    setWeShouldPost(checkTask(task.name, task.category, important));
                                    setImportant({ ...important, Low: false, High: false, Extreme: false }); setTask({ ...task, name: '', category: '' }); setAdd('Task Added Successfully');
                                    dispatch(addTask({
                                        taskName: task.name,
                                        taskCategory: task.category,
                                        taskImportance: important,
                                    }))
                                    
                                    
                                }}
                                id='btn-add-task'>Add Task</motion.div>
                            {weShouldPost && <motion.p>{add}</motion.p>}
                        </div>

                    </div>

                </motion.div>

            </div>

        </>
    )
}

export default NewTask;