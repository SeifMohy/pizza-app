import React from "react";
import { useElapsedTime } from "use-elapsed-time";
import { Box, Typography } from "@mui/material";

function bgColor(sec){
  if(sec < 300){
    return "#249225"
  }else if (sec < 600){
    return "#FED000"
  }else{
    return "#E10000"
  }
}
function formatTime(sec) {
  var sec_num = parseInt(sec, 10); 
  var hours = Math.floor(sec_num / 3600);
  var minutes = Math.floor((sec_num - hours * 3600) / 60);
  var seconds = sec_num - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  return hours + ":" + minutes + ":" + seconds;
}
const Timer = ({ item }) => {
  var timeDifference = new Date().getTimezoneOffset() * 60; //to get the time difference between utc and local time

  const { elapsedTime } = useElapsedTime({
    isPlaying: true,
    startAt:
      (new Date().getTime() - new Date(item.date).getTime()) / 1000 +
      timeDifference, //new date.getTime() returns time in milliseconds so we divide by 1000 to get seconds
  }); //time difference adjusts seconds according to local time
  if (!item) return <Box sx={{ m: 15 }}>loading...</Box>;
  return (
    <Box
      sx={{
        bgcolor: bgColor(elapsedTime),
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Typography align="right" sx={{ color: "white", mx: 1 }}>
        Order ID: {item.id}
      </Typography>
      <Typography align="right" sx={{ color: "white", mx: 1 }}>
        {formatTime(elapsedTime)}
        {/* formatting answer of seconds */}
      </Typography>
    </Box>
  );
};

export default Timer;
