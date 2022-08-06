import React from "react";
import SideBar from "./components/SideBar";
import NavBar from "./components/NavBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar></NavBar>
        <SideBar />
        <div>main page</div>
      </div>
    </BrowserRouter>
  );
}

export default App;
