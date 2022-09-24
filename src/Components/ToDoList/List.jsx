import React, { useState } from 'react'
import Form from "./Form";

function List() {
    const [toDos, setToDos] =useState([])
    const addToDo = (toDo) => {
        console.log(toDo);
        const toDoCopy = [...toDos]
        toDoCopy.push(toDo)
        setToDos(toDoCopy);
    
    }
    const markAsCompleted = (name ) => {
        const idx = toDos.findIndex((todo) => todo.name === name)
        const toDoCopy = [...toDos];
        toDoCopy[idx].completed= !toDoCopy[idx].completed ;
        setToDos(toDoCopy);

    }
  return (
    <div>
        {toDos.map((todo) => { return <p key= {todo.name} 
        onClick={() => markAsCompleted(todo.name)}
        className={todo.completed ? "strike": ""}>{todo.name}</p>
    })}
     <Form addToDoCallback={addToDo} />
    </div>
  )
}

export default List