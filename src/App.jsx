import Header from "./Components/Header";
import Products from "./Components/Products";
import PCBuilder from "./Components/page";
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/build-pc">Build PC</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/build-pc" element={<PCBuilder />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
