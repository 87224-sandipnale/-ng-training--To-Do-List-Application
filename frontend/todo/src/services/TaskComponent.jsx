import React, { useEffect, useState } from 'react';
import { getAllTasks, addTask, updateTask, deleteTask } from './TaskService';

const TaskComponent = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTaskName] = useState('');

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = () => {
        getAllTasks().then(response => {
            setTasks(response.data);
        });
    };

    const handleAddTask = () => {
        const task = { name: taskName }; // adjust based on Task fields
        addTask(task).then(() => {
            loadTasks();
            setTaskName('');
        });
    };

    const handleDeleteTask = (id) => {
        deleteTask(id).then(() => loadTasks());
    };

    const handleUpdateTask = (task) => {
        updateTask(task).then(() => loadTasks());
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Enter task name"
            />
            <button onClick={handleAddTask}>Add Task</button>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        {task.name}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        <button onClick={() => handleUpdateTask(task)}>Edit</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TaskComponent;
