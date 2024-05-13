// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<TaskList />} />
                <Route path="/add" element={<TaskForm />} />
                <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
        </Router>
    );
}

export default App;

