import React from 'react'
import useStyles from "../styles";
import {
    Container,
    Typography,
    Stack,
    Button,
} from "@mui/material";

import Grid from '@mui/material/Grid';
export const Home = () => {
  const classes = useStyles();
  return (
    <div className={classes.mainContainer}>
        <div className={classes.container} >
            <Container maxWidth="sm" className={classes.welcome} >
                <Typography variant="h2" align="center" sx={{color:"white"}} gutterBorrom>
                    No-Code data science platform
                </Typography>
                <Typography variant="h5" align="center" sx={{color:"white"}} paragraph>
                    Welcome to your data-driven solution. 
                </Typography>
                <div className={classes.buttons}>
                    <Stack direction="row" justifyContent="center" spacing={2}>
                        <Button variant="contained" color="primary">
                            Get Started
                        </Button>
                        <Button variant="outlined" sx={{color:"white", borderColor:"#243782b0"}}>
                            Learn More
                        </Button>
                    </Stack>
                </div>
            </Container>
        </div>

        <div className={classes.container} style={{ marginTop: "20px" }} >
            <Container maxWidth="sm" className={classes.tutorial} >
                <Stack direction="row" justifyContent="center" spacing={2} >
                    <iframe width="220" height="215" src="https://www.youtube.com/watch?v=RBSUwFGa6Fk"></iframe>
                    <Typography variant="h5" align="center" color="textPrimary" paragraph>
                        this tutorial will help you get started on the basics 
                        of our platform
                    </Typography>
                </Stack>
            </Container>
        </div>
      
    </div> 
  )
}

