import"./header.css"
import {PlusCircle} from "phosphor-react"

export function Header() {

return(

  <header className="header" >
    <div className="logo">
    <img src="/rocket.svg" alt="Rocket" />
    <h1 className="title">To<span>Do</span></h1>
    </div>
    <div className="inputTask">
      <form action="submit"></form>
      <input placeholder="Adicione uma nova tarefa" type="text" />
      <button type="submit">Criar <PlusCircle size={20}/></button>
    </div>
  </header>
  
)
}