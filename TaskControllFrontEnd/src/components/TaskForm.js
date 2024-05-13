// src/components/TaskForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function TaskForm({ match }) {
    const [titulo, setTitulo] = useState('');
    const [sla, setSla] = useState('');
    const [file, setFile] = useState(null);
    const navigate = useNavigate();
    const isEdit = match && match.params.id;

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('titulo', titulo);
        formData.append('sla', sla);
        if (file) {
            formData.append('file', file);
        }

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        const url = isEdit ? `http://localhost:5044/api/tarefas/${match.params.id}` : 'http://localhost:5000/api/tarefas';
        const method = isEdit ? axios.put : axios.post;

        method(url, formData, config)
            .then(() => {
                navigate.push('/');
            })
            .catch(error => console.error('Error:', error));
    };

    return (
        <div>
            <h1>{isEdit ? 'Edit Task' : 'Add Task'}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={titulo} onChange={e => setTitulo(e.target.value)} />
                </label>
                <label>
                    SLA (hours):
                    <input type="number" value={sla} onChange={e => setSla(e.target.value)} />
                </label>
                <label>
                    File:
                    <input type="file" onChange={e => setFile(e.target.files[0])} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default TaskForm;
