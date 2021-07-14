import { useState } from "react"
import logo from './logo.svg';
import './App.css';
import { connect } from "react-redux"
import Todo from "./Components/Todo"
import {addTodo} from "./action/todo"


function App(props) {

  const [state, setState] = useState({
    titleinput: "",
    discription: "",

  })
  const { todos, addTodo } = props

  const onTitleChange = (event) => {
    setState({...state,titleinput:event.target.value})

  }

  const onDiscriptionChange = (event) => {
    setState({...state,discription:event.target.value})

  }


  const onButtonClick = () => {
    console.log(state)
    addTodo({
      title: state.titleinput,
      desc: state.discription
    })
  }
  
  console.log(todos)
  console.log("😁")


  return (
    <div className="App">
      <h1>todos 🤣</h1>
      <input type="text" id="title" value={state.titleinput} onChange={event => onTitleChange(event)} />
      <input type="text" id="discription" value={state.discription} onChange={event => onDiscriptionChange(event)} />
      <button onClick={onButtonClick}>Click Me</button>
      <ol>
        {
          todos.map((todo, index) => <Todo key={index} todo={todo} index={index} />)
        }
      </ol>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
})

const mapDispatchToProps= (dispatch) => ({
  addTodo: todo => dispatch(addTodo(todo))
})




export default connect(mapStateToProps, mapDispatchToProps)(App);


