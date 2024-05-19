import { configureStore } from "@reduxjs/toolkit";

import filterReducer from "../Filter/filterSlice";

export const store = configureStore({
  reducer: filterReducer,
});
