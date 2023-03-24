import React, { useState } from "react"


interface EnumServiceGetOrderBy {
  teste:Array<{
    task:{
    check:boolean,
    content:string
  }
  }>
}

export default function Tasks({teste}:EnumServiceGetOrderBy){


console.log(teste)
    
    return(
        <div>    
         {teste.map(t =>{
          <h1>oi</h1>
         })} 
        </div>
    )
}