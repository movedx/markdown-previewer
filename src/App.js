import React from "react";
import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Header from "./components/Header";
import "./tailwind.output.css";

function App() {
  return (
    <div className="App h-full bg-indigo-200 flex flex-col">
      <Header />
      <div className="flex justify-around flex-1">
        <Editor />
        <Previewer />
      </div>
    </div>
  );
}

export default App;
