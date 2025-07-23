import { configureStore } from "@reduxjs/toolkit";
import provinceReducer from "../features/";

const store = configureStore({
    reducer: {
        province: provinceReducer,
    },
});

export default store;