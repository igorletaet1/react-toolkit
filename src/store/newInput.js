import { createSlice } from '@reduxjs/toolkit';

const newInput = createSlice({
    name: 'newTest',
    initialState: {
        newTest: [],
    },
    reducers: {
        testOne(state, action){
            console.log(state)
            console.log(action)
            state.newTest.push({
              id: new Date().toISOString(),
              tex: action.payload.tex,
            //   completed: false,
            });
        }
    }
})
export const {testOne} = newInput.actions;

export default newInput.reducer;