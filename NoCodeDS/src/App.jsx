import React from 'react'; 
// import useStyles from './styles';
import { Navbar } from './components/Navbar';
import { Home } from './components/Home';
import { Prices } from './components/Prices';

const App = () => {
    // const classes = useStyles();
    return (
        <>
            <CssBaseline />
            <Navbar />
            <Prices />
            
            
        </>
    )
}

export default App;