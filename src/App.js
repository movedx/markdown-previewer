import React from "react";
import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Header from "./components/Header";

function App() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <Header />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          height: "100%",
        }}
      >
        <Editor />
        <Previewer />
      </div>
    </div>
  );
}

export default App;
