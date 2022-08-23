import React, { useState } from "react";
import '../css/newTask.css';
import { motion } from 'framer-motion';
import GoBack from '../icons/go-back.svg';
import { Link } from 'react-router-dom';

export function NewTask() {
    const [important, setImportant] = useState({
        low: false,
        high: false,
        extreme: false
    });

    const [task, setTask] = useState({
        name: '',
        category: ''
    });

    const [add, setAdd] = useState('');

    const [addedAnimation, setAddedAnimation] = useState({opacity:[]})

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


                <motion.div className='input-field' animate={{opacity: [0,0.1,0.3,0.5,0.8,1]}} transition={{duration:1}}>
                    <div id='inputs'>
                        <div>
                            <h2>Task Name</h2>
                            <motion.input animate={{x:[-200, 0]}} value={task.name} onChange={(e) => 
                                { setTask({ ...task, name: e.target.value }); setAdd(''); 
                                setAddedAnimation({...addedAnimation, opacity:[]}) }}></motion.input>
                        </div>
                        <div>
                            <h2>Task Category</h2>
                            <motion.input animate={{x:[200, 0]}}  value={task.category} onChange={(e) => 
                                { setTask({ ...task, category: e.target.value }); setAdd(''); 
                                setAddedAnimation({...addedAnimation, opacity:[]})}}></motion.input>
                        </div>
                        <div>
                            <h2>Task Importance</h2>
                            <motion.div id='important-buttons' style={{ display: 'flex', flexDirection: 'row', gap: '20px', justifyContent: 'center' }}>
                                <motion.div
                                    animate={{x:[-100,20,0]}}
                                    transition={{ type: 'spring', duration:1,stiffness:400}}
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.05 }} style={{ color: important.low ? 'red' : 'black' }}
                                    onClick={() => {
                                        setImportant(
                                            { ...important, low: true, high: false, extreme: false }); setAdd('');
                                            setAddedAnimation({...addedAnimation, opacity:[]})
                                    }}>Low</motion.div>
                                <motion.div
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ color: important.high ? 'red' : 'black' }}
                                    onClick={() => {
                                        setImportant(
                                            { ...important, low: false, high: true, extreme: false }); setAdd('');
                                            setAddedAnimation({...addedAnimation, opacity:[]})
                                    }}
                                >High</motion.div>
                                <motion.div
                                animate={{x:[100,-20,0]}}
                                transition={{ type: 'spring', duration:1,stiffness:400}}
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.05 }}
                                    style={{ color: important.extreme ? 'red' : 'black' }} onClick={() => {
                                        setImportant(
                                            { ...important, low: false, high: false, extreme: true }); setAdd('');
                                            setAddedAnimation({...addedAnimation, opacity:[]})
                                    }}
                                >Extreme</motion.div>
                            </motion.div>
                        </div>
                        <div style={{ marginTop: '10px', display: 'flex', flexDirection: 'column', textAlign: 'center', gap:'15px', justifyContent: 'center', alignItems: 'center' }} >
                            <motion.div
                                animate={{y: [100,0]}}
                                transition={{ type: 'spring', duration: 1, stiffness: 100 }}
                                whileTap={{ scale: 0.8 }}
                                whileHover={{ scale: 1.1 }}
                                onClick={() => { setImportant({ ...important, low: false, high: false, extreme: false }); setTask({ ...task, name: '', category: '' }); setAdd('Task Added Successfully'); setAddedAnimation({...addedAnimation, opacity:[0,0.1,0.3,0.5,0.8,1]}) }}
                                id='btn-add-task'>Add Task</motion.div>
                            <motion.p animate={addedAnimation}>{add}</motion.p>
                        </div>

                    </div>

                </motion.div>

            </div>

        </>
    )
}

export default NewTask;