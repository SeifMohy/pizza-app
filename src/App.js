import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import CheckOut from "./Components/CheckOut";
import OrderPlaced from "./Components/OrderPlaced";
import Dashboard from "./Components/Dashboard";
import FooterBar from "./Components/FooterBar";
import HomePage from "./Pages/HomePage"
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

function App() {

  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getMenu());
  // }, []);

  // const state = useSelector(state => state.posts)

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/checkout" element={<CheckOut/>}/>
        <Route path="/orderplaced" element={<OrderPlaced/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <FooterBar />
    </div>
  );
}

export default App;
