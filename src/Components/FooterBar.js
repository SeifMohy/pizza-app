import React from "react";
import AppBar from "@mui/material/AppBar";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Logo from "../Pictures/Logo.png";
import DIcon from "../Pictures/DIcon.png";

const FooterBar = () => {
  return (
    <BottomNavigation class="footer" elevation={0}>
      <Toolbar sx={{ justifyContent: "space-between"}}>
        <Box sx={{ display: { xs: "flex" }}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" }, color:"white" }}
          >
            OBSD
          </Typography>
          <img src={Logo} />
        </Box>
        <Box>
          <Typography sx={{color:"white"}}>2022 OBSD - All Rights Reserved</Typography>
        </Box>
      </Toolbar>
    </BottomNavigation>
  );
};

export default FooterBar;
