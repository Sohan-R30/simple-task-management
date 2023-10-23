import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = []

export const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask: (state, {payload}) => {
        },

    }
})


export const {addTask } = taskSlice.actions;

export default taskSlice.reducer;