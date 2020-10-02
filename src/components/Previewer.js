import React from "react";
import "../tailwind.output.css";
import { useSelector } from "react-redux";
import { getText } from "./../redux/modules/markdownSlice";

const Previewer = () => {
  const text = useSelector(getText);

  return (
    <div className="bg-green-200 m-1 mb-3 flex flex-1 flex-grow-50 max-w-50">
      <div
        id="previewer"
        className="p-1 w-full border-solid border-2 border-gray-600 bg-white text-left break-words resize-none"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </div>
  );
};

export default Previewer;
