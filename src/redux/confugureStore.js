import { configureStore } from "@reduxjs/toolkit";
import markdownReducer from "./modules/markdownSlice";

export default configureStore({
  reducer: {
    markdown: markdownReducer,
  },
});
