import { configureStore } from '@reduxjs/toolkit';
import { recordReducer } from './RecordSlice';

export const store = configureStore({ reducer: { record: recordReducer } });