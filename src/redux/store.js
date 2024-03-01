import { configureStore } from "@reduxjs/toolkit";
import { saveState } from "../config/storage";
import service from "./service";
import { apiReducer } from "./service";
import { reduserLocal } from "./reducer";

export const store = configureStore({
  reducer: {
    ...apiReducer,
    ...reduserLocal,
  },
  middleware: (defaultMiddleware) => {
    return defaultMiddleware().concat(...service.map((api) => api.middleware));
  },
});

store.subscribe(() => {
  saveState("users", store.getState().user);
  saveState("todos", store.getState().todo);
});
