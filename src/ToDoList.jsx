import React, { useState } from "react"

function ToDoList () {
    const[tasks, setTasks] = useState([]);
    const[newTask, setNewTask] = useState("")

    function handleInputChange(event){
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() != ""){  //the dot trim is to remove any whitespace or it will not load the whitesapce
            setTasks(tasks =>[...tasks, newTask]); //the 3 dot in front of tasks is to spread the array in other for it not to be on one line 
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updateTasks = tasks.filter((_, i) => i !== index) // i is index renamed in other to differentiate it, and we use _ when you want to ignore a parameter
        setTasks(updateTasks);
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    function moveTaskDown(index) {
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="to-do-list">
            <h1>To-Do-List</h1>

            <div>
                <input 
                type="text"
                placeholder="Enter a task..."
                value={newTask}
                onChange={handleInputChange} />

                <button className="addButton" onClick={addTask}>
                    Add
                </button>
            </div>

            <div className="olStying">
                <ol>
                    {tasks.map((task, index) => 
                    <li key={index}>
                        <span className="text">{task}</span>
                        <button className="deleteButton" onClick={()=> deleteTask(index)}>
                            DELETE
                        </button>
                        <button className="moveButton" onClick={()=> moveTaskUp(index)}>
                            ☝
                        </button>
                        <button className="moveButton" onClick={()=> moveTaskDown(index)}>
                            👇
                        </button>
                    </li> )}
                </ol>
            </div>


        </div>
    )
}
export default ToDoList