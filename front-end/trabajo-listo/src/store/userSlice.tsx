import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  imageProfile: "",
  id: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_LOGIN(state, action) {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.imageProfile = action.payload.imageProfile;
      state.id = action.payload._id;
    },
    USER_LOGOUT(state) {
      state.name = "";
      state.email = "";
      state.imageProfile = "";
      state.id = "";
    },
  },
});
export const userActions = userSlice.actions;

export default userSlice.reducer;
