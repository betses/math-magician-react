import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Calculator from "./component/calculator";
import Quote from "./component/Quote";
import Home from "./component/Home";
import NavBar from "./component/NavBar";

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/calculator" element={<Calculator />} />
            <Route path="/quote" element={<Quote />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
