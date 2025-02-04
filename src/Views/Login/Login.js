import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import Fire from "../../Config/Firebase";
import StorageKeys from "../../Config/StorageKeys";
import Copyright from '../../Components/Copyright/Copyright';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function Login(props) {

    const classes = useStyles();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const onSubmit = (e) => {

        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        Fire.auth().signInWithEmailAndPassword(email, password)
            .then(user => {
                console.log(user)
                localStorage.setItem(StorageKeys.token, user.user.accessToken);
                localStorage.setItem(StorageKeys.user, JSON.stringify(user));
                enqueueSnackbar("Welcome User", { variant: 'success' });
                setTimeout(() => closeSnackbar, 1000)
                props.history.push("/dashboard")
            })
            .catch(error => {
                enqueueSnackbar(error.message, { variant: 'error' });
                setTimeout(() => closeSnackbar, 10000)
            });
    }

    return (
        <Container component="main" maxWidth="xs">

            <CssBaseline />

            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h4">Sign In</Typography>

                <form className={classes.form} noValidate onSubmit={onSubmit}>

                    <TextField
                        //variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />

                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />


                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        Sign In
                    </Button>

                    <Grid container>

                        <Grid item>

                            <Link href="/register" variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>

                        </Grid>

                    </Grid>

                </form>

            </div>

            <Box mt={5}>
                <Copyright />
            </Box>

        </Container>
    );
}