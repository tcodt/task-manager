import { createSlice } from "@reduxjs/toolkit";

const usernameSlice = createSlice({
  name: "username",
  initialState: {
    value: "",
  },
  reducers: {
    getUsername: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { getUsername } = usernameSlice.actions;
export default usernameSlice.reducer;
