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
    { heading: "Member Registration", content: "Members can be registered here.", link: "/members/registration" },
    { heading: "Client Registration", content: "Clients can be registered here.", link: "/dashboard" },
    { heading: "Workshops", content: "Manage Ongoing workshops and future workshops here.", link: "/dashboard" },
    { heading: "Donations", content: "Manage Donations from internal and external donors", link: "/dashboard" },
    { heading: "Events", content: "Manage Events organized by SLPEDF members.", link: "/dashboard" },
    { heading: "Reports", content: "View Reports here.", link: "/dashboard" }
];


export default function Dashboard(props) {
    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />

            <AppNavBar heading={"Dashboard"} props={props} />

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

            <Footer footerHeading={"Dashboard"} footerContent={"Use the Cards Above to navigate through the SLPEDF Database"} />

        </React.Fragment>
    );
}