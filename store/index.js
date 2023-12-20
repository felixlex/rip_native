import { configureStore } from '@reduxjs/toolkit';
import { shipReducer } from './ShipSlice';

export const store = configureStore({ reducer: { ship: shipReducer } });