import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type activeSection = "#home" | "#about" | "#projects" | "#skills" | "#experience" | "#contacts";

type InitialState = {
  activeSection: activeSection;
};

const initialState: InitialState = {
  activeSection: "#home",
};

const headerSlice = createSlice({
  name: "headerSlice",
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<activeSection>) => {
      state.activeSection = action.payload;
    },
  },
});

export const { setActiveSection } = headerSlice.actions;
export const { reducer: headerSliceReducer } = headerSlice;
