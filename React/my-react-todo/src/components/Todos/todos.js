import React, {Component} from 'react'
import Todo from '../Todo/todo'

class Todos extends Component {
  render(){
    let todos = this.props.todos.map( (todo) => {
      return (
        <Todo
          key={todo._id}
          todo={todo}/>
      )
    })
    return(
      <div className="todos">
        {todos}
      </div>
    )
  }
}

export default Todos
