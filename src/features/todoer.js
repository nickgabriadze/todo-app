import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todo: []
}

const todoReducer = createSlice({
    name: "todoReducer",
    initialState,
    reducers: {

    }  
})

export default todoReducer.reducer;