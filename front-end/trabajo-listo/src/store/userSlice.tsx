import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  imageProfile: "",
  id: "",
  token: "",
  isPro: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_LOGIN(state, action) {
      state.isPro = action.payload.isPro
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
      state.isPro = false;
      state.token = "";
    },
    SET_TOKEN(state, action) {
      state.token = action.payload.token
    }
  },
});
export const userActions = userSlice.actions;

export default userSlice.reducer;
