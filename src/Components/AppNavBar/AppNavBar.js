import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    }
}));


export default function AppNavBar(props) {
    const classes = useStyles();

    return (
        <React.Fragment>

            <CssBaseline />

            <AppBar position="relative">

                <Toolbar>

                    <CameraIcon className={classes.icon} />

                    <Typography variant="h6" color="inherit" noWrap className={classes.title}>{props.heading}</Typography>

                    <Button color="inherit">Logout</Button>

                </Toolbar>

            </AppBar>

        </React.Fragment>
    );
}