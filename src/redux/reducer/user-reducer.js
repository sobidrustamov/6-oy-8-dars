import { createSlice } from "@reduxjs/toolkit";
import { loadState } from "../../config/storage";

const initialState = loadState("users") || {
  users: [],
  count: 0,
};

const userReduser = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      const data = state.users.find((item) => item.id === action.payload.id);
      if (!data) {
        return {
          ...state,
          users: [...state.users, action.payload],
        };
      }
      return state;
    },
    remove: (state, action) => {
      return {
        ...state,
        users: [...state.users.filter((item) => item.id !== action.payload.id)],
      };
    },
  },
});

export default userReduser.reducer;
export const { add, remove } = userReduser.actions;
