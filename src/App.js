import NavBar2 from "./components/NavBar2";
import React from "react";
import './App.css';

function App() {
  return (
    <>
        
        <NavBar2 />
        <Route exact path="/" element={<Home />} />
        </>
  );
}

export default App;
