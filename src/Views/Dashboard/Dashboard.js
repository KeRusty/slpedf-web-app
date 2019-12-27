import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import AppNavBar from "../../Components/AppNavBar/AppNavBar";
import Cards from "../../Components/Cards/Cards"
import Footer from "../../Components/Footer/Footer";

const useStyles = makeStyles(theme => ({
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

const cardData = [
    { heading: "User Registration", content: "Users can be registered here." },
    { heading: "Client Registration", content: "Clients can be registered here." },
    { heading: "Workshops", content: "Manage Ongoing workshops and future workshops here." },
    { heading: "Donations", content: "Manage Donations from internal and external donors" },
    { heading: "Events", content: "Manage Events organized by SLPEDF members." },
    { heading: "Reports", content: "View Reports here." }
];


export default function Dashboard() {
    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />

            <AppNavBar heading={"Dashboard"} />

            <main>
                {/* Hero unit */}
                <div className={classes.heroContent}>
                    <Container maxWidth="sm">

                        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                            Sri lanka Podujana Entreprenuer Development Front
                        </Typography>

                        <Typography variant="h5" align="center" color="textSecondary" paragraph>
                            SLPEDF Database
                        </Typography>

                        <div className={classes.heroButtons}>

                            <Grid container spacing={2} justify="center">

                                <Grid item>

                                    <Button variant="contained" color="primary">
                                        Main call to action
                                    </Button>

                                </Grid>

                                <Grid item>

                                    <Button variant="outlined" color="primary">
                                        Secondary action
                                    </Button>

                                </Grid>

                            </Grid>
                        </div>

                    </Container>

                </div>

                <Cards cardData={cardData} />

            </main>

            <Footer />

        </React.Fragment>
    );
}