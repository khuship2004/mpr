import { useState } from "react";
import "./index.css";
import AssemblePC from "./Components/AssemblePC";
import Header from "./Components/Header";
import { BrowserRouter } from "react-router-dom";
import Products from "./Components/Products";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Products />
        {/* <AssemblePC /> */}
      </BrowserRouter>
    </>
  );
}

export default App;
