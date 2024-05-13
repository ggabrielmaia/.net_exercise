// src/components/TaskList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

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
