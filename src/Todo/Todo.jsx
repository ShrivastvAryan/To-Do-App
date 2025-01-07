import "./Todo.css"
import { useState } from "react"

export const Todo=()=>{

    const[inputValue,setInput]=useState("");
    const[task,setTask]=useState([])

    const handleInputChange=(value)=>{
        setInput(value);
        inputValue.toLowerCase()
    };

    const handleFormSubmit=(event)=>{
        event.preventDefault();
    

    if (!inputValue) return;

    if(task.includes(inputValue)){
        setInput("")
        return;
    } 


    setTask((prevTask)=> [...prevTask,inputValue])
   

    setInput("")

};

const handleDelete=(value)=>{
    const updatedTask=task.filter((currTask)=>currTask!==value);
    setTask(updatedTask)
}

    return(
        <>
        <span ><a href=""><img src="https://cdn.iconscout.com/icon/free/png-256/free-github-logo-icon-download-in-svg-png-gif-file-formats--70-flat-social-icons-color-pack-logos-432516.png?f=webp&w=256" className="github" alt="Github"/></a></span>
        <div className="main-div">
        <h1>To-Do List</h1>
            <form onSubmit={handleFormSubmit}>
            <input type="text" className="input-container" 
            autoComplete="off" value={inputValue} 
            onChange={(event)=>handleInputChange(event.target.value)}></input>

            <button className="submit">Add Task</button>
            </form>
            <div className="div-class">
            {
                task.map((currTask,index)=>{
                    return(
                    <li key={index}>
                        <span className="info">{currTask}</span>

                        <button className="action-1"  onClick={()=>handleDelete(currTask)}>Done</button>
                        <button className="action-2"  onClick={()=>handleDelete(currTask)}>Delete</button>
                    </li>
                    )
                })
            }
            </div>
            </div>
        </>
    )
}