import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading:false,
    error:"",
    signUpData:"",
};

export const authSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    signUpStart: (state,action)=>{
      console.log("hey hey strat      ")
        return ({
      ...state,
      loading:true,
    })},
    signUpSuccess: (state,action)=> ({
        ...state,
        loading:false,
        signUpData: action.payload,
      }),
    signUpError: (state,action)=> ({
      ...state,
      loading:false,
      error:action.payload,
    }),
  },
});

export const {
  signUpSuccess,
  signUpError,
  signUpStart
} = authSlice.actions;

export default authSlice.reducer;
