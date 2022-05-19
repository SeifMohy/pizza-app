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
import Cart from "./Cart";
import {useSelector} from "react-redux"
import { Link } from "react-router-dom";
import { RootState } from "../index";
import { Order, OrderLine } from "../Types";


const NavigationBar = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [open, setOpen] = React.useState(false);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // setAnchorEl(event.currentTarget);
    setOpen(true)
  };

  const handleClose = () => {
    //setAnchorEl(null);
    setOpen(false)
  };

  const id = open ? 'simple-popover' : undefined;

  const count = useSelector(((state: RootState) => state.counter));
  const ordered = count.filter((item: OrderLine) => item.quantity>0)
  const cartCount = sumOfCart(ordered);

  function sumOfCart(arr: OrderLine[]) {
    let count = 0;
    for (const item of arr) {
      count = count + item.quantity;
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
          <img src={Logo} alt="Logo"/>
        </Box>
        </Link>
        <Box sx={{ display: { xs: "flex" } }}>
          <Box sx={{ display: { xs: "flex" } }}>
            <Button href="#menu" sx={{ my: 2, color: "white", display: {xs: "none", sm: "block"} }}>
              Menu
            </Button>
            <Button href="#menu" sx={{ my: 2, color: "white", display: {xs: "none", sm: "block"} }}>
              Most Popular
            </Button>
          </Box>
          <Badge badgeContent={cartCount} color="primary" overlap="circular">
            <IconButton
              size="small"
              edge="end"
              color="inherit"
              onClick={(e) => handleClick(e)}
            >
              <img src={DIcon} alt="Icon"/>
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
        <Cart handleClose={handleClose}/>
      </Popover>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavigationBar;
