import React from 'react'; 
import { Button, Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container } from '@mui/material';
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
                            <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
                                <Grid item>
                                    <Button variant="contained" color="primary">
                                        Get Started
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="outlined" sx={{color:"white"}}>
                                        Learn More
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>
                    </Container>
                </div>

                <div className={classes.container} style={{ marginTop: "20px" }}>
                    <Container maxWidth="sm" className={classes.tutorial} >
                        <Grid container spacing={2} display="flex" justifyContent="center" alignItems="center">
                            <Grid item>
                                <iframe width="220" height="215" src="https://www.youtube.com/watch?v=RBSUwFGa6Fk">
                                </iframe> 
                            </Grid>
                            <Grid item>
                                <Typography variant="h5" align="center" color="textPrimary" paragraph>
                                    tutorial
                                </Typography>
                            </Grid>
                        </Grid>                       
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