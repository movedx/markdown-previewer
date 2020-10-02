import React from "react";
import "../tailwind.output.css";

const Header = () => {
  return (
    <div className="bg-indigo-200 h-10 flex-shrink-0 flex items-center">
      <div className="flex-1">Input</div>
      <div className="flex-1">Preview</div>
    </div>
  );
};

export default Header;
