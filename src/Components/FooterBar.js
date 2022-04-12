import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Logo from "../Pictures/Logo.png";


const FooterBar = () => {
  return (
    <BottomNavigation id="footer" elevation={0}>
      <Toolbar sx={{width:5/6, display: 'flex', justifyContent: 'space-around'}}>
        <Box sx={{ display: { xs: "flex" }}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: "none", md: "flex" }, color:"white" }}
          >
            OBSD
          </Typography>
          <img src={Logo} alt="icon"/>
        </Box>
        <Box>
          <Typography sx={{color:"white"}}>2022 OBSD - All Rights Reserved</Typography>
        </Box>
      </Toolbar>
    </BottomNavigation>
  );
};

export default FooterBar;
