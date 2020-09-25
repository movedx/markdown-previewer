import React from "react";
import "../tailwind.output.css";

const Editor = () => {
  return (
    <div className="bg-white w-full m-1 mb-3 flex">
      <textarea
        resize="0"
        className="p-1 w-full border-solid border-2 border-gray-600 resize-none bg-white"
      ></textarea>
    </div>
  );
};

export default Editor;
