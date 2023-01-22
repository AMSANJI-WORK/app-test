import { configureStore } from "@reduxjs/toolkit";
import { asyncActionMiddleware } from "../middlewares/asyncAction";
import PostReducer from "../../posts/store";
import DrawerReducer from "./drawer";
const rootReducer = {
  post: PostReducer,
  drawer: DrawerReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [asyncActionMiddleware],
});
