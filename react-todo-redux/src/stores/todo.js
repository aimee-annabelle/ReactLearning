import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todos",
    initialState:{value:[]},
    reducers:{
        add: (state, action) => {
            state.value.push(action.payload);
          },
        remove: (state,action) => {
            state.value = state.value.filter(val => val.id!==action.payload);
        },
        toggle: (state,action) =>{
            state.value = state.value.map(val => val.id=== action.payload ? { ...val, completed: !val.completed } : val)
        }
    }
})

export const {add, remove, toggle} = todoSlice.actions;
export default todoSlice.reducer;