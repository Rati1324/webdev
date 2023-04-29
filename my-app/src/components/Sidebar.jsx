import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import PagesIcon from '@mui/icons-material/Pages';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import ModeNightIcon from '@mui/icons-material/ModeNight';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";

export const Sidebar = () => {
  return (
    <Box 
      flex={1} 
      p={2}
      sx={{ display: {xs: "none", sm: "block"}}}
    >
      <Box position="fixed">
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <PagesIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <GroupIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <SettingsIcon />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon >
                <ModeNightIcon fontSize="large" />
                <Switch />
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  )
}
