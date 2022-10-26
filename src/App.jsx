import React, { useReducer } from "react";
import { StateContext } from "./Context/context";
import { reducer, initialState } from "./Reduser/reduser";
import Navbar from "./components/navbar/Navbar";

import "./App.css";
import HomePage from "./pages/home/HomePage";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/product/Products";
import Register from "./pages/register/Register";
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/"element={<HomePage/>} />
          <Route path="/produkt"element={<Products/>} />
          <Route path="/reg"element={<Register/>} />
        </Routes>
        
        
      </div>
    </StateContext.Provider>
  );
}

export default App;
