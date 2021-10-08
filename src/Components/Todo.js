import React from "react"

function Todo(props) {
    const { todo, index } = props
    const newtitle = todo.title.toUpperCase()
    return <li key={index} >{newtitle} - {todo.desc} - {todo.desc2}</li>
}

export default Todo