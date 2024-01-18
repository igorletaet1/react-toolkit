import { createSlice } from '@reduxjs/toolkit';
const testRead = createSlice(
    {
        name: 'testReadinput',
        initialState: {
            testReadinput: [],
        },
        reducers: {
            testReadOne(state, action){
                console.log(state)
                console.log(action)
                state.testReadinput.push({
                  id: new Date().toISOString(),
                  textRead: action.payload.textRead,
                //   completed: false,
                });
            }
        }
    }
)
export const {testReadOne} = testRead.actions

export default testRead.reducer