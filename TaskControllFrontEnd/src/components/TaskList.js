// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

// Este componente é responsável por buscar e exibir uma lista de todas as tarefas. Ele faz uma chamada API para o servidor para recuperar as tarefas e as exibe em uma lista.

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/tarefas')
            .then(response => {
                setTasks(response.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <h1>Tasks</h1>
            {tasks.map(task => (
                <div key={task.id}>
                    <h2>{task.titulo}</h2>
                    <p>SLA: {task.sla} hours</p>
                </div>
            ))}
        </div>
    );
}

export default TaskList;
