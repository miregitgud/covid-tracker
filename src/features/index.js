import { createSlice } from '@reduxjs/toolkit'
import data from '../utils/constants/provinces'

const provinceSlice = createSlice({
    name: "Province Slice",
    initialState: {
        province: data,
        provinceLocal: data,
    },
    reducers: {
        addData(state, action) {
            state.moviesLocal.push(action.payload);
        },
        updateData(state, action) {
            state.movies = action.payload;
        }
    },
});

const { addData, updateData } = provinceSlice.actions;
const provinceReducer = provinceSlice.reducer;

export default provinceReducer;
export { addData, updateData };