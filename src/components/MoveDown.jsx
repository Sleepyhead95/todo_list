
export default function MoveDown(tasks, index, setTasks) {
    function moveTaskDown(index) {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return (
        <button onClick={ () => moveTaskDown(index)}>DOWN</button>
    )
}