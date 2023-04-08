import React, { useState } from "react";
import { Trash } from "phosphor-react";
import "./tasks.css"

interface EnumServiceGetOrderBy {
     teste:Array<{
       check: boolean;
       content: string;
      }> 
    
}

export default function Tasks({ teste }: EnumServiceGetOrderBy) {
  console.log(teste);


  return <>
  {teste.map(t=>{
    return <div className="task">
            <input type="checkbox" ></input>
            <p>{t.content}</p>
            <Trash size={25} color="red"/>
           </div>
  })}
         </>;
}
