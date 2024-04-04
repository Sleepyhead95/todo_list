import {useState} from 'react';
import DeleteTask from './Delete';
import MoveUp from './MoveUp';
import MoveDown from './MoveDown';
import EditTask from './Edit';

export default function AddTask() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [editTaskIndex, setEditTaskIndex] = useState(-1); 
    const [editTaskText, setEditTaskText] = useState('');

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
                    <DeleteTask index={index} tasks={tasks} setTasks={setTasks} />
                    <EditTask index={index} tasks={tasks} setTasks={setTasks} setEditTaskIndex={setEditTaskIndex} setEditTaskText={setEditTaskText} editTaskText={editTaskText} editTaskIndex={editTaskIndex} task={task} />
                    <MoveUp index={index} tasks={tasks} setTasks={setTasks} />
                    <MoveDown index={index} tasks={tasks} setTasks={setTasks} />
                    </li>
                
                )}
            </ol>
        </div>
        
    )
}