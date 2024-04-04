import { useState } from 'react';

export default function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTasks(tasks => [...tasks, newTask]);
            setNewTask('');
        } 
    }
    
    function deleteTask(index) {}

    function moveTaskUp(index) {}

    function moveTaskDown(index) {}

    return (
        <div className="todo_list">
            <h1>Today's Tasks</h1>
            <div>
                <input type="text" 
                placeholder="Add a new task"
                value={newTask} 
                onChange={handleInputChange} />
                <button onClick={addTask}>Add Task</button>
            </div>
            <ol>
                {tasks.map((task, index) => 
                 <li key={index}>
                    <span>{task}</span>
                    <button onClick={ () => deleteTask(index)}>Delete</button>
                    <button onClick={ () => moveTaskUp(index)}>UP</button>
                    <button onClick={ () => moveTaskDown(index)}>DOWN</button>
                    </li>
                
                )}
            </ol>
        </div>
    )
}