import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    chatOpen:false,
};

export const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    openChatSupport: (state,action)=>({
      chatOpen: action.payload.chatOpen,
    }),
  },
});

// Action creators are generated for each case reducer function
export const {
  openChatSupport
} = settingsSlice.actions;

export default settingsSlice.reducer;
