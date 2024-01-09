import "./App.css";
import Home from "./Home";
import React, { BrowserRouter, Route, Routes } from "react-router-dom";
import Read from "./Read";
import Update from "./Update";


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home></Home>}></Route>
          <Route exact path="/read" element={<Read></Read>}></Route>
          <Route exact path="/update" element={<Update></Update>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
