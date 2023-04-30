import React, { useReducer, useState } from "react";
import { actionType, todoType, voidFunc } from "../constants/voidFunc";


const AddTodo = ({addTodo}:voidFunc) => {

  const initialState:todoType = {
    text:'',
    desc:'',
    status: false
  }

  function reducer(state:todoType,action:actionType) {
    switch (action.type) {
      case 'HANDLE_CHANGE': {
        return {...state, ...action.payload};
      }
      case 'RESET': {
        return initialState;
      }
    
      default:{
        return state;
      }
    }
  }

  const [state,dispatch] = useReducer<((state:todoType,action:actionType) => todoType)>(reducer,initialState)

  function handleChange(e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) {
    const {name,value} = e.target;
    let payload = {
      [name] : value
    };
     dispatch({type:'HANDLE_CHANGE', payload})  
  }

  function handleSubmit(e:React.MouseEvent<HTMLButtonElement>) {
    addTodo(state);
     dispatch({type:'RESET'})   
  }
  
const {text,desc} = state;

  return (
    <div className="todoInputs">
      <input value={text} name="text" onChange={handleChange} type="text" placeholder="Enter text" />
      <textarea value={desc} onChange={handleChange}
        placeholder="Enter description"
        name="desc"
        id=""
        cols={30}
        rows={Number("10")}
      ></textarea>
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddTodo;
