import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatOpen:false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    openChatSupport: (state,action)=>{
      return ({
      chatOpen: action.payload,
    })},
  },
});

// Action creators are generated for each case reducer function
export const {
  openChatSupport
} = settingsSlice.actions;

export default settingsSlice.reducer;
