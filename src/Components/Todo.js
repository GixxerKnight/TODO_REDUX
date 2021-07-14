import React from "react"

function Todo(props) {
    const { todo, index } = props
    const newtitle = todo.title.toUpperCase()
    return <li key={index} >{newtitle} - {todo.desc}</li>
}

export default Todo