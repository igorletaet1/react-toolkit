import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './todoSlice';
import newTestReducer from './newInput';
import testReadinputReducer from './testRead';

export default configureStore({
  reducer: {
    todos: todoReducer,
    newTest: newTestReducer,
    testReadinput: testReadinputReducer,
  },
});
