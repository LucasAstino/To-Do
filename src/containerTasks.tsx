import { useState } from "react"
import React from "react"
import"./containerTasks.css"
import NotTasks from "./notTasks"
import Tasks from "./Tasks"


export default function ContainerTasks() {

    const [tasksList,setTasksList]=useState([{task:{check:false, content:'olá'}},{task:{check:false, content:'olá'}}])
    
    

    


return(
<section className="tasksContainer">
    <header className="headerTasks">
        <p className="created">Tarefas criadas <span>0</span></p>
        <p className="done">Concluídas <span>0</span></p>
    </header>
   
    <main className="main">

        <div>
            {tasksList.length > 0 ? <Tasks teste={[...tasksList]}/> : <NotTasks/>}
        </div>
    </main>
</section>
  
)
}