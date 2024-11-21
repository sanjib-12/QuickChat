import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from './loaderSlice';
import useReducer from "./usersSlice";

const store = configureStore({
   reducer: { loaderReducer, useReducer}
});

export default store;
