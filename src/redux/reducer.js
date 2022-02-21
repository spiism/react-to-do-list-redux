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
  },
});

export const { addTodos } = addTodoReducer.actions;
export const reducer = addTodoReducer.reducer;
