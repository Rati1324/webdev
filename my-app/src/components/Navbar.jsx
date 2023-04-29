import React, { useState } from 'react'
import { AppBar, Toolbar, styled, Typography, Box, InputBase, Badge, Stack} from "@mui/material";
import { Pets } from "@mui/icons-material";
import EmailIcon from "@mui/icons-material/Email";
import NotificationsIcon from '@mui/icons-material/Notifications';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between"
})

const Search = styled("div")({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: "6px",
  width: "40%",
})

const Icons = styled(Box)({
  display: "flex", 
  gap:"10px",
  alignItems:"center"
})

const UserBox = styled(Box)({
  display: "flex", 
  gap:"5px",
  alignItems:"center"
})

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h6" sx={{display:{xs:"none", sm:"block"}}}>
          welcome
        </Typography>
        <Pets sx={{display:{xs:"block", sm:"none"}}}/>

        <Search><InputBase/></Search>

        <Stack direction="row" spacing={2}>
          <Icons sx={{display:{xs:"none", sm:"block"}}}>
            <Badge badgeContent={4} color="error">
              <EmailIcon />
            </Badge>
            <Badge badgeContent={4} color="error">
              <NotificationsIcon />
            </Badge>
          </Icons>

          <UserBox>
            <Avatar onClick={e=>setOpen(true)} sx={{ width:30, height:30}} src="https://mui.com/static/images/avatar/1.jpg"/>
            <Typography variant="span">John</Typography>
          </UserBox>
        </Stack>

      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={e=>setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
          <MenuItem>Profile</MenuItem>
          <MenuItem>My account</MenuItem>
          <MenuItem>Logout</MenuItem>
      </Menu>
    </AppBar>
  )
}