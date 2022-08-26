import React, { useState } from 'react'
import '../css/filter.css';
import FilterIcon from '../icons/filter.svg';
import CheckIcon from '../icons/check.svg';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setFilterBy } from '../features/todoer';
import { nanoid } from '@reduxjs/toolkit';

export function Filter() {
    const dispatch = useDispatch();
    const [openSearch, setOpenSearch] = useState(false)
    const [category, setCategory] = useState('');
    const categories = Array.from(new Set(useSelector((state) => state.todoReducer).todos.map(obj => obj.taskCategory)));


    const [optionStyle, setOptionStyle] = useState({
        height: '50px'
    })

    return (
        <>
            <motion.div className="filter" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}>
                    <p id='filter-by-category'>Filtering By Category</p>

                    <div id='row'>
                        <div id='filter-input'>
                            <img id='filter-icon' alt="Filter Icon" src={FilterIcon} />
                            <input

                             
                                onChange={(e) => {
                                    setCategory(e.target.value);
                                    
                                    if(category.length > -1){
                                        setOpenSearch(true);
                                    };
                                    setOptionStyle({...optionStyle,
                                        height: 'fit-content'})
                                
                                    
                                }}
                                id='actual-filter-input' value={category} autoComplete="off"></input>
                        </div>

                        <motion.img
                            onClick={() => {
                                dispatch(setFilterBy({
                                    filterBy: category
                                }));
                                setOpenSearch(false);
                                setOptionStyle({...optionStyle,
                                    height: '50'})
                            }
                            }
                            whileTap={{ scale: 0.8 }}
                            whileHover={{ scale: 1.1 }}
                            id='check-icon' src={CheckIcon}></motion.img>
                    </div>
                    {openSearch && <div
                        style={optionStyle}
                        id='options-border'>
                        {categories.filter(eachCategory => eachCategory.toLowerCase().match(new RegExp(category.toLowerCase(), 'g'))).map((category) => {
                            return (
                                <motion.div className="options"

                                    transition={{ duration: 1, type: "spring" }}
                                    whileTap={{ scale: 0.8 }}
                                    whileHover={{ scale: 1.1 }}
                                    onClick={() => setCategory(category)}
                                    key={nanoid()}>{category}
                                    <hr id='hr-line'></hr>
                                </motion.div>

                            )

                        })}
                    </div>}
                </div>
            </motion.div>

        </>
    )
}

export default Filter;
