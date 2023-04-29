import React from 'react'
import { 
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";

import { MoreVert } from '@mui/icons-material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Post = () => {
  return (
    <Card sx={{margin: "5px"}}>
      <CardHeader
        avatar={<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
          R
        </Avatar>}
        action={<IconButton aria-label="settings">
          <MoreVert />
        </IconButton>}
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016" />

      <CardMedia
        component="img"
        height="10%"
        image="https://mui.com/static/images/cards/paella.jpg"
        alt="Paella dish" />

      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default Post