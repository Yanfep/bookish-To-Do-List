// 1. Importamos React y Hooks
import React, { useState } from "react";

export const ToDolist = () => {
    const [taskInput, setTaskInput] = useState('');
    const [taskList, setTaskList] = useState(["task1", "task2"]);

    const handleInputChange = (event) => {
        setTaskInput(event.target.value);
    };

    function addTask(event){
        if (event.key == "Enter") {
          setTaskList([...taskList, taskInput]);
          setTaskInput('');
        }
      };

    const task = taskList.map(element =>{
        return (
            <li key={element.id} id="task" className="list-group-item">{element}
            <button type="button" id="button" className="btn-close" onClick={() => deleteTask(element)}></button> </li>

        )
      });
    

    function deleteTask (element) {
            setTaskList(taskList.filter(item => item !== element)
        )};

	return (
        <div className="d-flex justify-content-center">
            <div>
                <input type="input" id="theInput"className="form-control" onChange={handleInputChange} value={taskInput} onKeyDown={addTask} placeholder="Enter a task"/>
            </div>
            <ul className="list-group">
                {task}
            </ul>
            <div className="task1 card card-body"><small class="text-body-secondary"> {taskList.length} item left </small></div>
            <div className="task2 card"></div>
            <div className="task3 card"></div>
            <div className="task4 card"></div>
        </div>
	);
};