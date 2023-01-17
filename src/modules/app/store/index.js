import { configureStore } from "@reduxjs/toolkit";
import { asyncActionMiddleware } from "../middlewares/asyncAction";
import PostReducer from "../../posts/store";
const rootReducer = {
  post: PostReducer,
};

export const store = configureStore({
  reducer: rootReducer,
  middleware: [asyncActionMiddleware],
});
