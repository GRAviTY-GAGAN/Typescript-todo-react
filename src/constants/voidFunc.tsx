export interface voidFunc {
    addTodo : (todo:todoType)=>void
}

export interface todoType {
    text: string,
    desc: string,
    status: false,
    id?: string,
}

export interface actionType {
    type: string,
    payload?: object
}

export interface typeTodo {
    todo: todoType
    handleToogle: (id:string|undefined)=>void
  }