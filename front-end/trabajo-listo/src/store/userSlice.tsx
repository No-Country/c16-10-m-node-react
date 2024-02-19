import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nombre: "",
  email: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    USER_LOGIN(state, action) {
      state.nombre = action.payload.nombre;
      state.email = action.payload.email;
    },
    USER_DESLOG(state) {
      state.nombre = "";
      state.email = "";
    },
  },
});
export const userActions = userSlice.actions;

export default userSlice.reducer;
