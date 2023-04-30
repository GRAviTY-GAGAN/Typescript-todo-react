import { todoType, typeTodo } from "../constants/voidFunc";



const TodoItem = ({todo, handleToogle}:typeTodo) => {

  function handleChange(id:string | undefined) {
    handleToogle(id);
  }

  return <div className="todoItem">
    <div><input type="checkbox" checked={todo.status} onChange={()=>handleChange(todo.id)} /></div>
    <div><p>{todo.text}</p>
    <p>{todo.desc}</p></div>
  </div>;
};

export default TodoItem;
