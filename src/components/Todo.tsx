import React, { useEffect, useState } from "react";
import AddTodo from "./AddTodo";
import { todoType } from "../constants/voidFunc";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todos, setTodos] = useState(JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('practTodos'))))||[]);


  useEffect(()=>{
    localStorage.setItem('practTodos', JSON.stringify(todos));
  },[todos])

  function addTodo(todo:todoType) {
   let newTodo = {...todo, id: Date.now()+todo.text}
   setTodos([...todos, newTodo]);
  }
  

  
  function handleToogle(id:string | undefined) {
    let newTodos = [...todos];
    newTodos = newTodos.map((todo) => {
      if(todo.id === id) {
        todo.status = !todo.status;
        return todo;
      }
      return todo;
    })
    setTodos(newTodos);
  }
  

  return (
    <div className="todosContainer">
      <AddTodo addTodo={addTodo} />
      <div>{todos.map((todo:todoType) => {
        return <TodoItem key={todo.id} todo={todo} handleToogle={handleToogle} />
      })}</div>
    </div>
  );
};

export default Todo;
