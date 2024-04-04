import {useState} from 'react';
import DeleteTask from './Delete';
import MoveUp from './MoveUp';
import MoveDown from './MoveDown';

export default function AddTask() {
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

    return (
        <div>
            <input type="text" 
            placeholder="Add a new task"
            value={newTask} 
            onChange={handleInputChange} />
            <button onClick={addTask} type="submit">Add Task</button>

            <ol>
                {tasks.map((task, index) => 
                 <li key={index}>
                    <span>{task}</span>
                    <DeleteTask />
                    <MoveUp />
                    <MoveDown />
                    </li>
                
                )}
            </ol>
        </div>
        
    )
}