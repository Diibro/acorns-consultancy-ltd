import React from "react";
import './App.css';
import MainComponents from "./components/MainComponents";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <MainComponents/>
    </BrowserRouter>
  );
}
 
export default App;