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
        },
        {
            id: nanoid(),
            taskName: "Drink Coffee",
            taskCategory: "Hydration",
            taskImportance: "Extreme",
            taskComplete: false,
        }
    ],
    weFilter: false,
    filteredTodos: []
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
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].id === id) {
                    state.todos[i].taskComplete = !state.todos[i].taskComplete;
                }
            }
        },

        changeFilterOption: (state, action) => {
            state.weFilter = action.payload;

        },

        filterTodos: (state, action) => {
            let filteredOnes = [];
            const filteringCategory = action.payload.category;
            for (let i = 0; i < state.todos.length; i++) {
                if (state.todos[i].taskCategory === filteringCategory) {
                    filteredOnes.push(state.todos[i])
                }
            }
            state.filteredTodos = filteredOnes;
          
        }

    }
})

export const { addTask, changeTaskCompleteStatus, changeFilterOption, filterTodos } = todoReducer.actions;
export default todoReducer.reducer;