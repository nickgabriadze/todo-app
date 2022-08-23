import React from 'react';
import '../css/navbar.css';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function NavigationBar() {


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
                        <motion.h3 whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}
                            style={{ cursor: 'pointer' }}>Filter</motion.h3>
                        <Link to="/add-new-task"><motion.h3 whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}
                            style={{ cursor: 'pointer' }}>Add New Task</motion.h3></Link>
                    </div>
                </div>
            </motion.div>
        </>
    )
}

export default NavigationBar;