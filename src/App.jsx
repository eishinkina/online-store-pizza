import React, { useEffect, useState } from "react";
import "./styles/scss/app.scss";
import Header from "./components/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <Home />
        </div>
      </div>
    </div>
  );
};

export default App;
