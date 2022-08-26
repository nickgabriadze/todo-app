import React, {useState} from 'react';
import '../css/navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { changeFilterOption } from '../features/todoer';
import { useSelector } from 'react-redux';
import { changeMainFilter } from '../features/todoer';
import {changeNavbarOptions } from '../utils/navbarOption';

export function NavigationBar() {
    const { weFilter } = useSelector((state) => state.todoReducer)
    const dispatch = useDispatch();
    const [completed, setCompleted] = useState("");
    return (
        <>
            <motion.div initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ type: 'spring' }}
                className="navbar">
                <div id='actual-navbar'>
                    <motion.h1 style={{ cursor: 'pointer' }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.8 }}
                        id='name-of-website' drag dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}>Todoer</motion.h1>
                    <div id='navigation'>
                        <motion.h3 
                         onClick={() => {
                            setCompleted(changeNavbarOptions(completed));
                            dispatch(changeMainFilter({
                                filter: changeNavbarOptions(changeNavbarOptions(completed))
                            }))
                      
                        }}
                         whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}
                         style={{ cursor: 'pointer' }}
                        >{changeNavbarOptions(completed)}</motion.h3>
                        <motion.h3
                            onClick={() => {
                                dispatch(changeFilterOption(!weFilter))
                            }}
                            whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}
                            style={{ cursor: 'pointer' }}>{weFilter ? "Main Page" : "Filter"}</motion.h3>
                        <Link to="/add-new-task"><motion.h3 whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}
                            style={{ cursor: 'pointer' }}>Add New Task</motion.h3></Link>
                    </div>
                </div>
            </motion.div>

        </>
    )
}

export default NavigationBar;