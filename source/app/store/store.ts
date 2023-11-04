import { headerSliceReducer } from "@/source/entities";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";

const rootReducer = combineReducers({
  header: headerSliceReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export const wrapper = createWrapper(() => store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
