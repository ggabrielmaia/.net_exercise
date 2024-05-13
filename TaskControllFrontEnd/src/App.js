// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';

// Este é o componente raiz do aplicativo React, configurando o roteador e as rotas principais. Inclui a barra de navegação e define rotas para as páginas de listagem de tarefas e formulário de tarefas.

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

