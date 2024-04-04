import { useState } from 'react';
import AddTask from './AddTask';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // function handleInputChange(e) {
    //     setNewTask(e.target.value);
    // }

    // function addTask() {
    //     if (newTask.trim() !== "") {
    //         setTasks(tasks => [...tasks, newTask]);
    //         setNewTask('');
    //     } 
    // }

    // function deleteTask(index) {

    //     const updatedTasks = tasks.filter((_, i) => i !== index);
    //     setTasks(updatedTasks);
    // }

    // function moveTaskUp(index) {
    //     if (index > 0) {
    //         const updatedTasks = [...tasks];
    //         [updatedTasks[index], updatedTasks[index - 1]] = 
    //         [updatedTasks[index - 1], updatedTasks[index]];
    //         setTasks(updatedTasks);
    //     }
    // }

    // function moveTaskDown(index) {
    //     if (index < tasks.length - 1) {
    //         const updatedTasks = [...tasks];
    //         [updatedTasks[index], updatedTasks[index + 1]] = 
    //         [updatedTasks[index + 1], updatedTasks[index]];
    //         setTasks(updatedTasks);
    //     }
    // }

    return (
        <div className="todo_list">
            <h1>Today's Tasks</h1>
            <AddTask />
        </div>
    )
}