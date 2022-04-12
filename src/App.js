import React from "react";
import "./App.css";
import NavigationBar from "./Components/NavigationBar";
import CheckOut from "./Components/CheckOut";
import OrderPlaced from "./Components/OrderPlaced";
import Dashboard from "./Components/Dashboard";
import FooterBar from "./Components/FooterBar";
import HomePage from "./Pages/HomePage";
import { Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    primary: {
      main: "#ff9200",
    },
    error: {
      main: "#cd2f17",
      contrastText: "white",
    },
    black: {
      main: "#000000",
    },
    secondary: {
      main: "#303030",
    },
    grey: {
      main: "#707070",
    },
  },
});

function App() {

  return (
    <div>
      <ThemeProvider theme={theme}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orderplaced/:ordId" element={<OrderPlaced />} />
          <Route path="/dashboard/pending" element={<Dashboard />} />
        </Routes>
        <FooterBar />
      </ThemeProvider>
    </div>
  );
}

export default App;
