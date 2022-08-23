import { createSlice, nanoid } from "@reduxjs/toolkit";
import { checkTask } from '../utils/checkTask.js';

const initialState = {
    todos: [
        {
            id: nanoid(),
            taskName: "Drink Water",
            taskCategory: "Hydration",
            taskImportance: "Extreme",
            taskComplete: false,
        }
        ,
        {
            id: nanoid(),
            taskName: "Workout",
            taskCategory: "Health & Fitness",
            taskImportance: "Extreme",
            taskComplete: false,
        }
    ]
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
        },

        changeTaskCompleteStatus: (state, action) => {
            let id = action.payload.todoTaskId;
            for(let i = 0; i < state.todos.length; i++){
                if(state.todos[i].id === id){
                    state.todos[i].taskComplete = !state.todos[i].taskComplete;
                }
            }
        }
    }
})

export const { addTask,changeTaskCompleteStatus } = todoReducer.actions;
export default todoReducer.reducer;