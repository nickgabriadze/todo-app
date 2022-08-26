import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import TodoApp from './Todo.js';
import NewTask from './components/newTask';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<TodoApp />} />
          <Route path="/add-new-task" element={<NewTask />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);