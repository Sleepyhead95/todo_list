export default function EditTask ( {index, taskText, tasks, setTasks, setEditTaskIndex, setEditTaskText, editTaskText, editTaskIndex, task} ) {
    
    function handleEditTask(index, taskText) {
        setEditTaskIndex(index);
        setEditTaskText(taskText);
      }
    
      function handleUpdateTask() {
        if (editTaskText.trim() !== "") {
          const updatedTasks = [...tasks];
          updatedTasks[editTaskIndex] = editTaskText;
          setTasks(updatedTasks);
          setEditTaskIndex(-1); 
          setEditTaskText(''); 
        }
      }

      return ( 
        <button onClick={() => handleEditTask(index, task)}>Edit</button>
      )
}