import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';

import AppNavBar from '../../Components/AppNavBar/AppNavBar';
import Copyright from '../../Components/Copyright/Copyright'
import Fire from "../../Config/Firebase";
import StorageKeys from "../../Config/StorageKeys";
import { useSnackbar } from 'notistack';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    formControl: {
        margin: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));




export default function Checkout(props) {
    const classes = useStyles();


    const [value, setValue] = React.useState('female');

    const handleChange = event => {
        setValue(event.target.value);
    };

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const onSubmit = (e) => {

        e.preventDefault();

        const fullName = e.target.fullName.value;
        const phone = e.target.phone.value;
        const email = e.target.email.value;
        const dob = e.target.dob.value;
        const nic = e.target.nic.value;
        const religion = e.target.religion.value;
        const gender = e.target.gender.value;
        const address1 = e.target.address1.value;
        const address2 = e.target.address2.value;
        const city = e.target.city.value;
        const district = e.target.district.value;
        const zip = e.target.zip.value;
        const divisionalSecretariat = e.target.divisionalSecretariat.value;
        const occupation = e.target.occupation.value;
        const education = e.target.education.value;
        const launch = e.target.launch.value;
        const ongoing = e.target.ongoing.value;
        const currentStatus = e.target.currentStatus.value;
        const skills = e.target.skills.value;


        let myRef = Fire.database().ref().child("memberList").push()
        let key = myRef.getKey();

        myRef.push(
            {
                id: key,
                fullName: fullName,
                phone: phone,
                email: email,
                dob: dob,
                nic: nic,
                religion: religion,
                gender: gender,
                address1: address1,
                address2: address2,
                city: city,
                district: district,
                zip: zip,
                divisionalSecretariat: divisionalSecretariat,
                occupation: occupation,
                education: education,
                launch: launch,
                ongoing: ongoing,
                currentStatus: currentStatus,
                skills: skills
            },
            function (error) {
                if (error) {
                    enqueueSnackbar(error.message, { variant: 'error' });
                    setTimeout(() => closeSnackbar, 10000)
                } else {
                    enqueueSnackbar("Member Has Been Added", { variant: 'success' });
                    setTimeout(() => closeSnackbar, 1000)
                    window.location.reload();
                }
            }
        );

    }

    return (
        <React.Fragment>

            <CssBaseline />

            <AppNavBar heading={"Member Registration"} props={props} />

            <main className={classes.layout}>

                <Paper className={classes.paper}>

                    <Typography component="h1" variant="h4" align="center">Member Registration</Typography>

                    <form className={classes.form} noValidate onSubmit={onSubmit}>

                        <Grid container spacing={3}>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="fullName"
                                    name="fullName"
                                    label="Full Name"
                                    fullWidth
                                    autoComplete="fname"
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    id="phone"
                                    name="phone"
                                    label="Phone No"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    id="email"
                                    name="email"
                                    label="Email"
                                    fullWidth
                                    autoComplete="email"
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    id="dob"
                                    name="dob"
                                    label="Date Of Birth"
                                    type="date"
                                    fullWidth
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    id="nic"
                                    name="nic"
                                    label="NIC No"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="religion"
                                    name="religion"
                                    label="Religion"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <FormControl component="fieldset" className={classes.formControl}>

                                    <FormLabel component="legend">Gender</FormLabel>

                                    <RadioGroup aria-label="gender" name="gender" value={value} onChange={handleChange}>

                                        <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
                                        <FormControlLabel value="other" control={<Radio color="primary" />} label="Other" />

                                    </RadioGroup>

                                </FormControl>

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="address1"
                                    name="address1"
                                    label="Address line 1"
                                    fullWidth
                                    autoComplete="billing address-line1"
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    id="address2"
                                    name="address2"
                                    label="Address line 2"
                                    fullWidth
                                    autoComplete="billing address-line2"
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    id="city"
                                    name="city"
                                    label="City"
                                    fullWidth
                                    autoComplete="billing address-level2"
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>

                                <TextField
                                    id="district"
                                    name="district"
                                    label="District"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    id="divisionalSecretariat"
                                    name="divisionalSecretariat"
                                    label="Divisional Secretariat"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12} sm={6}>

                                <TextField
                                    required
                                    id="zip"
                                    name="zip"
                                    label="Zip / Postal code"
                                    fullWidth
                                    autoComplete="billing postal-code"
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="occupation"
                                    name="occupation"
                                    label="Occupation"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="education"
                                    name="education"
                                    label="Educational Qualifications"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="launch"
                                    name="launch"
                                    label="Business / Project to be launched"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="ongoing"
                                    name="ongoing"
                                    label="Ongoing Business"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="currentStatus"
                                    name="currentStatus"
                                    label="Current Staus of Business"
                                    fullWidth
                                />

                            </Grid>

                            <Grid item xs={12}>

                                <TextField
                                    required
                                    id="skills"
                                    name="skills"
                                    label="Special Skills / Experience"
                                    fullWidth
                                />

                            </Grid>

                        </Grid>


                        <Grid container>

                            <Grid item>

                                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>Register Member</Button>

                            </Grid>

                        </Grid>

                    </form>


                </Paper>

                <Copyright />

            </main>

        </React.Fragment>
    );
}