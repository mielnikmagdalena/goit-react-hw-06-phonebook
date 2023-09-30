import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filterActions'; // Importuj akcje związaną z filtrowaniem

const filterReducer = createReducer('', builder => {
  builder.addCase(setFilter, (state, action) => {
    return action.payload;
  });
});
export default filterReducer;
