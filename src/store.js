import { configureStore } from '@reduxjs/toolkit';
import changeValue from './slices/changeValue';

export default configureStore({
  reducer: {
    value: changeValue
  },
})