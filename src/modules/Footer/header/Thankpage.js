import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Logo from '../../../Assets/images/logo.png'
import Last from "../../../Assets/images/last.jpg"
import {  useNavigate } from 'react-router-dom';

export default function Thankpage() {
 let Navigate=useNavigate()
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            display="block"
            background-attachment="fixed"
            sx={{ mr: 2 }}
          >
          </IconButton>
          <img src={Logo} alt="G" style={{ width: '70px', height: "50px", borderRadius: "5px" }}></img>
          <Typography variant="h6" component="div" sx={{ marginLeft: 1, fontFamily: "roboto", fontWeight: "bold", fontSize: "1.5rem" }}>
            Happy Trip
          </Typography>
        </Toolbar>
      </AppBar><div sx={{ flexDirection: 'column' }}>
        <img src={Last} alt="G" width="100%" height="auto " />
        <Typography variant="h6" component="div" sx={{ textAlign: "center", marginTop: "-95vh", fontSize: 50 }}> Thank You For Choosing Us...</Typography>
        <Button sx={{ fontSize: 20, display: "block", margin: "auto" }} variant="contained" onClick={()=>Navigate("/")}>Go To Home</Button>


      </div>
    </Box >
  );
}
