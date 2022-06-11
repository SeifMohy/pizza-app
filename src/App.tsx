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
import { Provider } from "react-redux";
import store from "./Store";


const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  status: { //creating type for custom theme
    grey: {
      main: "red",
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
    secondary: {
      main: "#303030",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
      <Provider store={store}>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/orderplaced/:ordId" element={<OrderPlaced />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
        <FooterBar />
      </Provider>
      </ThemeProvider>
    </div>
  );
}

export default App;
