import React, {Component} from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import ABTextField from "../../components/UI/ABTextField/ABTextField";
import {login} from "../../services/auth.service";
import {Redirect} from "react-router";

function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const classes = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: "auto",
        marginTop: "100px",
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

class LoginPage extends Component {

    state = {
        isFormValid: false,
        isRedirect: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                }
            },
            password: {
                value: '',
                type: 'password',
                label: 'Password',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                }
            }
        }
    };

    loginHandler = () => {
        const userData = {
            email: this.state.formControls.email.value,
            pass: this.state.formControls.password.value,
        };
        login(userData).then(res => {
            this.setState({...this.state, isRedirect: true});
            setTimeout(() => {
                window.location.replace('/personalAccount');
            })
        });
    };

    submitHandler = event => {
        event.preventDefault();
    };

    validateControl(value, validation) {
        if (!validation) {
            return true;
        }

        let isValid = true;


        if(validation.required) {
            isValid = value.trim() !== '' && isValid;
        }
        if(validation.email) {
            isValid = validateEmail(value) && isValid;
        }
        if(validation.minLength) {
            isValid = value.length >= validation.minLength && isValid;
        }

        return isValid
    }

    onChangeHandler = (event, controlName) => {
        console.log(`${controlName}: `, event.target.value);

        const formControls = {...this.state.formControls};
        const controls = {...formControls[controlName]};

        controls.value = event.target.value;
        controls.touched = true;
        controls.valid = this.validateControl(controls.value, controls.validation);

        formControls[controlName] = controls;

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid;
        })

        this.setState({formControls, isFormValid})
    }

    renderTextField() {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <ABTextField
                    style={{marginTop: '3em'}}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    autoFocus
                    shouldValidate={!!control.validation}
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    error={!control.valid}
                    touched={control.touched}
                    label={control.label}
                    onChange={event => this.onChangeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        console.log(this.state.isRedirect);
        return (
            <div>
                {this.state.isRedirect && <Redirect to="/personalAccount" />}
                <Container component="main" maxWidth="xs">
                    <CssBaseline/>
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}
                                style={{margin: "auto", marginTop: "100px"}}>
                            <LockOutlinedIcon/>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <form className={classes.form}
                              onSubmit={this.submitHandler}
                        >
                            { this.renderTextField() }
                            <FormControlLabel control={<Checkbox value="remember" color="primary"/>}
                                              label="Remember me"/>
                            <Button type="submit"
                                    fullWidth
                                    variant="contained"
                                    color="primary"
                                    disabled={!this.state.isFormValid}
                                    onClick={this.loginHandler}
                                    className={classes.submit}>
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                </Container>
            </div>
        );
    }
};

export default LoginPage
//
// function mapDispatchToProps(dispatch) {
//     return{
//         auth: (email, password, isLogin) => dispatch(auth(email, password, isLogin))
//     }
// }
//
// export default connect(null, mapDispatchToProps()) (LoginPage)
