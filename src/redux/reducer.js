import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const addTodoReducer = createSlice({
  name: "todo",
  initialState,
  reducers: {
    //here we will write our reducer
    //adding todos
    addTodos: (state, action) => {
      state.push(action.payload);
      return state;
    },
    //remove todos
    removeTodos: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addTodos, removeTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
