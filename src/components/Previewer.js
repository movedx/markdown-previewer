import React from "react";
import "../tailwind.output.css";
import { useSelector } from "react-redux";
import { getText } from "./../redux/modules/markdownSlice";

const Previewer = () => {
  const text = useSelector(getText);

  return (
    <div className="bg-green-200 w-full m-1 mb-3 flex">
      <div className="p-1 w-full border-solid border-2 border-gray-600 bg-white text-left">
        <div dangerouslySetInnerHTML={{ __html: text }} />
      </div>
    </div>
  );
};

export default Previewer;
