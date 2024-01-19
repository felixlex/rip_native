import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    records: [],
    record: {},
};

export const recordSlice = createSlice({
    name: 'record',
    initialState,
    reducers: {
        setRecords: (state, { payload }) => {
            console.log('setrecords');
            state.records = payload;
        },
        setRecord: (state, { payload }) => {
            console.log('setrecord');
            state.record = payload;
        },
        resetRecord: (state) => {
            console.log('resetrecord');
            state.record = {};
        },
    },
});

export const recordReducer = recordSlice.reducer;

export const { setRecords, setRecord, resetRecord } = recordSlice.actions;