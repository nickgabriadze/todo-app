import { createSlice, nanoid } from "@reduxjs/toolkit";
import { checkTask } from '../utils/checkTask.js';

const initialState = {
    todos: []
}

const todoReducer = createSlice({
    name: "todoReducer",
    initialState,
    reducers: {
        addTask: (state, action) => {
           
            if (checkTask(action.payload.taskName, action.payload.taskCategory, action.payload.taskImportance)) {
                const importanceValues = Object.entries(action.payload.taskImportance);
                let importance = ''
                for (let i = 0; i < importanceValues.length; i++) {
                    if (importanceValues[i][1] === true) {
                        importance = importanceValues[i][0];
                    }
                }
                const taskObject = {
                    id: nanoid(),
                    taskName: action.payload.taskName,
                    taskCategory: action.payload.taskCategory,
                    taskImportance: importance,
                    taskComplete: false,
                }

                const newTodos = [...state.todos, taskObject];
                state.todos = newTodos;
                
            }
        }
    }
})

export const { addTask } = todoReducer.actions;
export default todoReducer.reducer;