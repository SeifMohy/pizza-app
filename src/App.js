import React from "react"
import './App.css';
import NavigationBar from "./Components/NavigationBar"
import ShowCase from "./Components/ShowCase"
import Filters from "./Components/Filters"
import Menu from "./Components/Menu"
import CheckOut from "./Components/CheckOut"
import OrderPlaced from "./Components/OrderPlaced"
import Dashboard from "./Components/Dashboard"
import FooterBar from "./Components/FooterBar"


function App() {
  return (
    <div>
       <NavigationBar/>
      <ShowCase/>
      <Filters/>
      <Menu/>
      <CheckOut/>
      <OrderPlaced/>
      <Dashboard/>
      <FooterBar/>
    </div>
  );
}

export default App;
