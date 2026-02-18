import { createSlice } from "@reduxjs/toolkit";
const savedTodos = JSON.parse(localStorage.getItem("todos")) || [];
const todoSlice = createSlice({
  name: "todos",
  initialState: savedTodos,
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        done: false,
      });
      localStorage.setItem("todos", JSON.stringify(state));
    },
    toggleTodo: (state, action) => {
      const todo = state.find(t => t.id === action.payload);
      if (todo) todo.done = !todo.done;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    deleteTodo: (state, action) => {
      const newState = state.filter(t => t.id !== action.payload);
      localStorage.setItem("todos", JSON.stringify(newState));
      return newState;
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.find(t => t.id === id);
      if (todo) todo.text = text;
      localStorage.setItem("todos", JSON.stringify(state));
    },
    markAll: (state) => {
      state.forEach(t => (t.done = true));
      localStorage.setItem("todos", JSON.stringify(state));
    }
  },
});
export const {
  addTodo,
  toggleTodo,
  deleteTodo,
  updateTodo,
  markAll
} = todoSlice.actions;
export default todoSlice.reducer;
