import React, { useState } from 'react'
import '../css/filter.css';
import FilterIcon from '../icons/filter.svg';
import CheckIcon from '../icons/check.svg';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setFilterBy } from '../features/todoer';
export function Filter() {
    const dispatch = useDispatch();
    const [category, setCategory] = useState('');

    return (
        <>
            <motion.div className="filter" initial={{ y: -100}} animate={{y:0}} transition={{duration:1}}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <p id='filter-by-category'>Filtering By Category</p>
                    <div id='row'>
                        <div id='filter-input'>
                            <img id='filter-icon' alt="Filter Icon" src={FilterIcon} />
                            <input 
                            onChange={(e) => {setCategory(e.target.value)}}
                            id='actual-filter-input' value={category}></input>
                        </div>
                        <motion.img
                            onClick={() => {dispatch(setFilterBy({
                                filterBy: category
                            }))}}
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            id='check-icon' src={CheckIcon}></motion.img>
                    </div>
                </div>
            </motion.div>

        </>
    )
}

export default Filter;
