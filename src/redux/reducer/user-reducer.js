import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  count: 0,
};

const userReduser = createSlice({
  name: "user",
  initialState,
  reducers: {
    add: (state, action) => {
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    },
    remove: (state, action) => {
      return {
        ...state,
        users: state.users.filter((item) => item.id !== action.payload.id),
      };
    },
  },
});

export default userReduser.reducer;
export const { add, remove } = userReduser.actions;
