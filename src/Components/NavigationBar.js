import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Logo from "../Pictures/Logo.png";
import DIcon from "../Pictures/DIcon.png";
import Badge from "@mui/material/Badge";
import Popover from '@mui/material/Popover';
import Cart from "./Cart"
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";


const NavigationBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const count = useSelector((state => state.counter));
  const ordered = count.filter((item) => item.order>0)
  const cartCount = sumOfCart(ordered);

  function sumOfCart(arr) {
    let count = 0;
    for (const item of arr) {
      count = count + item.order;
    }
    return count;
  }
  

  return (
    <AppBar elevation={0} sx={{ bgcolor: "#303030" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
      <Link to={"/"} style={{textDecoration:"none", color:"white"}}>
        <Box sx={{ display: { xs: "flex" } }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { md: "flex" } }}
          >
            OBSD
          </Typography>
          <img src={Logo} />
        </Box>
        </Link>
        <Box sx={{ display: { xs: "flex" } }}>
          <Box sx={{ display: { xs: "flex" } }}>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Menu
            </Button>
            <Button sx={{ my: 2, color: "white", display: "block" }}>
              Most Popular
            </Button>
          </Box>
          <Badge badgeContent={cartCount} color="primary" overlap="circular">
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              onClick={handleClick}
            >
              <img src={DIcon} />
            </IconButton>
          </Badge>
          <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Cart />
      </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
