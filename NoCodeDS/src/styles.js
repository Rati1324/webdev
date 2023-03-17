import { makeStyles, StylesProvider } from '@mui/styles';

const useStyles = makeStyles({
    mainContainer: {
        minHeight: "calc(100vh - 200px)",
        marginTop: "20px",
        marginBottom: "20px",
        // border: "1px solid",
    },
    container: {
        padding: "40px 10px 40px",
        backgroundColor: "#243782b0", 
        opacity: "86%",
        width: "60%",
        margin: "auto",
        borderRadius: "20px"
    },
    welcome: {
        padding: "20px 10px 20px",
    },
    icon: {
        marginRight: '20px',
    },
    buttons: {
        marginTop: "40px",
    },
    cardGrid: {
        padding: "20px 0",
    },
    card: {
        height: "100%",
        display: "flex",
        flexDirection: "column"
    },
    cardMedia: {
        paddingTop: "56.25%"
    },
    cardContent: {
        flexGrow: 1
    },
    tutorial: {
        padding: "20px 10px 20px",
        display: "flex",
        flexDirection: "column"
    },
    // footer: {
    //     backgroundColor: "#5b748ae8",
    //     padding: "10px 10px 10px",
    //     // height: "100px",
    //     boxShadow: "0px -2px 10px 0px grey",
    //     width: '100%',
    // },
});

export default useStyles;