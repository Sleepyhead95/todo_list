
export default function MoveUp({tasks, index, setTasks}) {
    function moveTaskUp(index) {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    return (
        <button onClick={ () => moveTaskUp(index)}>UP</button>
    )
}