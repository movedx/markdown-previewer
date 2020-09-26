import { createSlice } from "@reduxjs/toolkit";
import marked from "marked";

export const markdownSlice = createSlice({
  name: "markdown",
  initialState: {
    text: "",
  },
  reducers: {
    convertMarkdown: (state, action) => {
      state.text = marked(action.payload, { sanitize: true, headerIds: false });
    },
  },
});

export const { convertMarkdown, setText } = markdownSlice.actions;

export const getText = (state) => state.markdown.text;

export default markdownSlice.reducer;
