import React from 'react'
import { Box, Typography, AvatarGroup, Avatar, ImageList, ImageListItem } from "@mui/material";

export const Rightbar = () => {
  return (
    <Box 
      bgcolor="lightblue" 
      flex={2} 
      p={2}
      sx={{ display: {xs: "none", sm: "block"}}}
    >
      <Box position="fixed">
        <Typography variant="h6">
          Online friends
        </Typography>

        <AvatarGroup max={7} sx={{border:"1px solid", width:"200px"}}>
          <Avatar alt="Remy Sharp" />
          <Avatar alt="Travis Howard" />
          <Avatar alt="Cindy Baker" />
          <Avatar alt="Agnes Walker" />
          <Avatar alt="Trevor Henderson" />
        </AvatarGroup>

        <Typography variant="h6" mt={2} mb={2}>
          Latest Photos
        </Typography>

        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/breakfast.jpg"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/burgers.jpg"/>
          </ImageListItem>
          <ImageListItem>
            <img src="https://material-ui.com/static/images/image-list/camera.jpg"/>
          </ImageListItem>
        </ImageList>

      </Box>
    </Box>
  )
}
