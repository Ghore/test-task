import { createSlice } from "@reduxjs/toolkit";

const state = {
  name: null,
  email: null,
  phone: null,  
  position_id: Number(null),
  access_token: null,
  isAuth: false
};

export const authSlice = createSlice({
  name: "auth",
  initialState: state,
  reducers: {
    register: (state, { payload }) => ({
      ...state,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      position_id: payload.position_id,
      photo: payload.photo
    }),
    addToken: (state, { payload }) => ({
      ...state,
      access_token: payload.token,
    }),
    sucsessRegistration: (state, { payload }) => ({
      ...state,
      isAuth: true
    }),
      close: (state,{ payload}) => ({
        ...state,
        isAuth:false
      })

  },
});
