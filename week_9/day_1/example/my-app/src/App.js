import React from "react";
import "./App.css"

import AboutContainer from "./components/AboutContainer";
import Sidebar from "./components/Sidebar";
import Nav from "./components/Nav";

function App() {

  return (
    <div className="App">
      <Nav />
      <AboutContainer />
      <Sidebar />
    </div>
  );
}

export default App;

