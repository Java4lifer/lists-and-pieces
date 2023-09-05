import { useState, useEffect } from 'react'
import "../App.css"

export default function Fun() {
    const[input, setInput] = useState("");
    const [task, newTask] = useState<string[]>([])
    const[editask, setTasks] = useState({
        enabled: false,
        task: ''
    });

const [test, setTest] = useState(false);
useEffect(() => {
    const savedTask = localStorage.getItem("@cursoreact")
    console.log(savedTask)
}, [])

function regigi() {
    if(!input){
        alert("Put task, you mongolian.")
        return;
    }
    if(editask.enabled) {
        editaskSave();
        return;
    }
    newTask(task => [...task, input])
    setInput("")
    localStorage.setItem("@cursoreact", JSON.stringify([...task, input]))
}
function editaskSave() {
    const getIndex = task.findIndex(task => task === editask.task)
    const allTasks =  [...task];
    allTasks[getIndex] = input;
    newTask(allTasks)
    setTasks({
        enabled: false,
        task: ""
    })
    setInput("")
    localStorage.setItem("@cursoreact", JSON.stringify(allTasks))
}
function dieTask(item:string){
    const kill = task.filter(task => task !== item)
    newTask(kill)
    localStorage.setItem("@cursoreact", JSON.stringify(kill))
}
function susTask(item:string) {
    setInput(item)
    setTasks({
        enabled: true,
        task: item
    })
}

 return (
        <div>
        <button onClick={() => setTest(true)}>Let's click</button>
        <h1>!Task list!</h1>
        <input
        placeholder='Task digit'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={regigi}>{editask.enabled ? "Fix the Task" : "Add Cringe Task"}</button>
        <hr/>
        {task.map( (item, index) => (
            <section key={item}> 
                <span>{item}</span>
                <button onClick={() => dieTask(item)}>Die Task</button>
                <button onClick={() => susTask(item)}>Edit Task</button>
            </section>
        ))}
        
        </div>
 )

}

