import { useState } from "react"
import"./Tasks.css"
import Clipboard from "./assets/Clipboard.svg"

export function Tasks() {

    const [tasks,setTasks]=useState([{}])

    const oi = `<div className="notTasks">
    <p><strong>
    Você ainda não tem tarefas cadastradas
    </strong><br/>
    Crie tarefas e organize seus itens a fazer
    </p>
</div>"`


return(
<section className="tasksContainer">
    <header className="headerTasks">
        <p className="created">Tarefas criadas <span>0</span></p>
        <p className="done">Concluídas <span>0</span></p>
    </header>
    <main className="main">
        <img src={Clipboard} alt="Clipboard" />
        {oi}
    </main>
</section>
  
)
}