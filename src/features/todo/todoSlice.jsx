import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: nanoid(), text:"Hello world" }],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //always 2 params, state and action// and payload is an object
    addToDo: (state, action) => {
      const todo = {
        id: nanoid(), 
        text: action.payload,
      };
      state.todos.push(todo);
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const{id,text}=action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if(todo){
        todo.text=text;
      }
    },
  },
});

export const { addToDo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;