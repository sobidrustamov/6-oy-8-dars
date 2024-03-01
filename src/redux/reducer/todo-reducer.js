import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("todos") || {
  todos: [],
  count: 0,
};

const todoReduser = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const data = state.todos.find((item) => item.id === action.payload.id);
      if (!data) {
        return {
          ...state,
          todos: [...state.todos, action.payload],
        };
      }
      return state;
    },
    removeTodo: (state, action) => {
      return {
        ...state,
        todos: [...state.todos.filter((item) => item.id !== action.payload.id)],
      };
    },
  },
});

export default todoReduser.reducer;
export const { addTodo, removeTodo } = todoReduser.actions;
