import React from "react";
import "../tailwind.output.css";
import { useDispatch } from "react-redux";
import { convertMarkdown } from "../redux/modules/markdownSlice";

const Editor = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-white m-1 mb-3 flex flex-1">
      <textarea
        onChange={(event) => dispatch(convertMarkdown(event.target.value))}
        resize="0"
        className="p-1 w-full border-solid border-2 border-gray-600 resize-none bg-white"
      ></textarea>
    </div>
  );
};

export default Editor;
