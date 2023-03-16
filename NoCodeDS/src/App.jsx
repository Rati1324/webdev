import React from 'react'; 
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Stack } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import useStyles from './styles';
import Navbar from './components/Navbar';

const App = () => {
    const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Navbar/>
            <div className={classes.mainContainer}>
                <div className={classes.container} >
                    <Container maxWidth="sm" className={classes.welcome} >
                        <Typography variant="h2" align="center" sx={{color:"white"}} gutterBorrom>
                            give us all your data!!
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
            <footer className={classes.footer}>
                <Typography variant="h6" align="center" gutterBottom>
                    footer
                </Typography>
            </footer>
        </>
    )
}

export default App;