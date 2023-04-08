import { useState } from "react"
import React from "react"
import"./containerTasks.css"
import NotTasks from "./notTasks"
import Tasks from "./Tasks"

interface taskprops {
    task:Array<{
        check:boolean;
        content:string
    }>
}




export default function ContainerTasks(props:taskprops) {
    

    


return(
<section className="tasksContainer">
    <header className="headerTasks">
        <p className="created">Tarefas criadas <span>0</span></p>
        <p className="done">Concluídas <span>0</span></p>
    </header>
   
    <main className="main">

            {props.task.length > 0 ? <Tasks teste={[...props.task]}/> : <NotTasks/>}

    </main>
</section>
  
)
}