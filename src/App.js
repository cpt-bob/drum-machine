import React from "react";
import "./App.css";
import PadBank from "./Padbank";
import Display from "./Display";
import Controls from "./Controls";

function App() {
  return (
    <div className="app">
      <Display />
      <PadBank />
      <Controls />
    </div>
  );
}

export default App;
