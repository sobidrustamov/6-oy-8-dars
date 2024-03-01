import { userApi } from "./user-api";
import { todoApi } from "./todo-api";

export const apiReducer = {
  [userApi.reducerPath]: userApi.reducer,
  [todoApi.reducerPath]: todoApi.reducer,

};

export default [userApi, todoApi];
