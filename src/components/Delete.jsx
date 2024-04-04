
export default function DeleteTask ({tasks, setTasks, index}) {
    function deleteTask(index) {

        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);

       
    }
    return (
        <button onClick={ () => deleteTask(index)}>Delete</button>
    )
}