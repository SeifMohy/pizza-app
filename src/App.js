import React from "react"
import './App.css';
import NavigationBar from "./Components/NavigationBar"
import ShowCase from "./Components/ShowCase"
import Filters from "./Components/Filters"
import Menu from "./Components/Menu"
import CheckOut from "./Components/CheckOut"


function App() {
  return (
    <div>
      <NavigationBar/>
      <ShowCase/>
      <Filters/>
      <Menu/>
      <CheckOut/>
    </div>
  );
}

export default App;
