import { createSlice } from "@reduxjs/toolkit";

const state = {
  page: null,
  users: [],
  positions: [],
};

export const usersSlice = createSlice({
  name: "user",
  initialState: state,
  reducers: {
    getAllUsers: (state, { payload }) => ({
      ...state,
      users: payload.users,
    }),
    getPositions: (state, { payload }) => ({
      ...state,
      positions: payload.positions,
    }),
  },
});
