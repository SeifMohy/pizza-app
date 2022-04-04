import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Logo from "../Pictures/Logo.png";
import DIcon from "../Pictures/DIcon.png"
import Badge from '@mui/material/Badge';


const NavigationBar = () => {
  return (
    <AppBar elevation={0}  sx={{bgcolor:"#303030"}}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Box sx={{ display: { xs: "flex" }}}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" } }}
          >
            OBSD
          </Typography>
          <img src={Logo}/>
        </Box>
        <Box sx={{ display: { xs: "flex" } }}>
          <Box sx={{ display: { xs: "flex" } }}>
          <Button sx={{ my: 2, color: "white", display: "block" }}>Menu</Button>
          <Button sx={{ my: 2, color: "white", display: "block" }}>
            Most Popular
          </Button>
          </Box>
          <Badge badgeContent={4} color="primary" overlap="circular">
          <IconButton size="small" edge="end" color="inherit">
          <img src={DIcon}/>
          </IconButton>
          </Badge>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
