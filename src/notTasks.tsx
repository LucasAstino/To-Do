import React from "react"
import Clipboard from "./assets/Clipboard.svg"

export default function notTasks(){
    return(
        <>
        <img src={Clipboard} alt="Clipboard" />
        <div className="notTasks">
    <p><strong>
    Você ainda não tem tarefas cadastradas
    </strong><br/>
    Crie tarefas e organize seus itens a fazer
    </p>
    </div>
        </>

    )
}