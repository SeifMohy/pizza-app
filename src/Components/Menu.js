import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import MPizza from "../Pictures/MPizza.png";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import {useSelector, useDispatch} from "react-redux"
import {Increment, Decrement} from "../Actions/OrderActions"

const Menu = () => {

    const count = useSelector((state => state.counter));
    const dispatch = useDispatch();
    
    console.log(count)
 

  return (
    <Box sx={{ mt: 3, minHeight:"50vh"}}>
      <Container maxWidth="lg">
        <Grid
          container
          spacing={1}
          justify="center"
          sx={{ alignItems: "center" }}
        >
{count.map((item)=>{
    return (
        <Grid sm={4}>
        <Card sx={{ display: "flex", m:1}}>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <img src={item.image} />
            <CardContent>
              <Typography component="div" variant="h5">
                {item.name}
              </Typography>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
                {item.description}
              </Typography>
              <Typography>Price:{item.price}</Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
              <IconButton disabled={item.order? false:true} onClick={()=>dispatch(Decrement(item), console.log(item))}>
                <RemoveIcon />
              </IconButton>
              <Typography>{item.order}</Typography>
              <IconButton onClick={()=>dispatch(Increment(item))}>
                <AddIcon />
              </IconButton>
            </Box>
            </CardContent>
          </Box>
        </Card>
      </Grid>
    );
})}
        </Grid>
      </Container>
    </Box>
  );
};

export default Menu;
