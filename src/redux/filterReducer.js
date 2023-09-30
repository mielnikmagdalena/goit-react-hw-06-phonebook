import { createReducer } from '@reduxjs/toolkit';
import { setFilter } from './filterActions'; // Importuj akcje związaną z filtrowaniem

const initialState = {
  filter: '',
};

const filterReducer = createReducer(initialState, builder => {
  builder.addCase(setFilter, (state, action) => {
    state.filter = action.payload;
  });
});

export default filterReducer;
