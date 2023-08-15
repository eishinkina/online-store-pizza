import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";

import "./styles/scss/app.scss";

import Header from "./components/Header";
import Home from "./pages/Home";
// import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

export const SearchContext = createContext("");

const App = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="wrapper">
      <SearchContext.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
      </SearchContext.Provider>
    </div>
  );
};

export default App;
