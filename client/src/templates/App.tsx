import { useState } from 'react'

export default function Fun() {
    const[input, setInput] = useState("");
    const[editask, setTaskas] = useState({
        enabled: false,
        task: ''
    });
    const [task, newTask] = useState([
    'die',
    'take out the trash(me)'
])

function regigi() {
    if(!input){
        alert("Put task, you mongolian")
        return;
    }
    newTask(task => [...task, input])
}
function dieTask(item:string){
    const kill = task.filter(task => task !== item)
    newTask(kill)
}
function susTask(item:string) {
    setInput(item)
    setTaskas({
        enabled: true,
        task: item
    })
}

 return (
        <div>
        <h1>!Task list!</h1>
        <input
        placeholder='Task digit'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={regigi}> Add cringe Task</button>
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

