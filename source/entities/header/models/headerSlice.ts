import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export type activeSection = "#home" | "#about" | "#projects" | "#skills" | "#experience" | "#contacts";

type InitialState = {
  activeSection: activeSection;
  timeOfTheLastClick: number;
};

const initialState: InitialState = {
  activeSection: "#home",
  timeOfTheLastClick: 0,
};

const headerSlice = createSlice({
  name: "headerSlice",
  initialState,
  reducers: {
    setActiveSection: (state, action: PayloadAction<activeSection>) => {
      state.activeSection = action.payload;
    },
    setTimeOfTheLastClick: (state, action: PayloadAction<number>) => {
      state.timeOfTheLastClick = action.payload;
    },
  },
});

export const { setActiveSection, setTimeOfTheLastClick } = headerSlice.actions;
export const { reducer: headerSliceReducer } = headerSlice;
