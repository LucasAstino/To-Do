import {Header} from"./Header"
import {useState} from "react"
import "./App.css";
import ContainerTasks  from "./containerTasks";
import Tasks  from "./Tasks";
import NotTasks  from "./notTasks";

export function App() {
  
  const [tasksList,setTasksList]=useState([{check:false, content:'olá'},{check:false, content:'olá'}])
    
  

return(
  <>
  <Header/>
  <ContainerTasks task={tasksList}/>
  </>
  
)
}