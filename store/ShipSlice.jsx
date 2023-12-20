import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    ships: [],
    ship: {},
};

export const shipSlice = createSlice({
    name: 'ship',
    initialState,
    reducers: {
        setShips: (state, { payload }) => {
            console.log('setships');
            state.ships = payload;
        },
        setShip: (state, { payload }) => {
            console.log('setship');
            state.ship = payload;
        },
        resetShip: (state) => {
            console.log('resetship');
            state.ship = {};
        },
    },
});

export const shipReducer = shipSlice.reducer;

export const { setShips, setShip, resetShip } = shipSlice.actions;