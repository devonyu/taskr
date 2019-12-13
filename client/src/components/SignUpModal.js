// @flow
import axios from 'axios';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Modal from '@material-ui/core/Modal';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { makeStyles } from '@material-ui/core/styles';

type InputPropsFlow = {
  toggleView: (view: string) => void,
  toggleModal: () => void,
  open: boolean,
};

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    display: 'flex',
    flexDirection: 'column',
    left: '50%',
    margin: 8,
    maxWidth: 500,
    minWidth: 350,
    outline: 'none',
    padding: theme.spacing(4),
    position: 'absolute',
    top: '50%',
    transform: `translate(-50%, -50%)`,
  },
  loginButton: {
    backgroundColor: '#2b8296',
    borderRadius: 10,
    color: 'white',
    top: 10,
    width: '100%',
    '&:hover': {
      color: 'black',
    },
  },
  signupButton: {
    backgroundColor: '#3ddb93',
    borderRadius: 10,
    color: 'white',
    marginBottom: 30,
    top: 10,
    width: '100%',
    '&:hover': {
      color: 'black',
    },
  },
  textField: {
    margin: 8,
  },
}));

const SignUpModal = (InputProps: InputPropsFlow) => {
  const [values, setValues] = React.useState({
    email: '',
    name: '',
    password: '',
    passwordValidation: '',
    showPassword: false,
    loading: false,
    error: null,
  });

  const handleSubmit = async event => {
    const { email, password, name } = values;
    event.preventDefault();
    setValues({ ...values, loading: true });
    try {
      const { data } = await axios.post('/users/signup', {
        email,
        password,
        name,
      });
      if (data.error) {
        setValues({ ...values, error: data.error, loading: false });
      } else {
        setValues({ ...values, error: null, loading: false });
        const { token, userID } = await data;
        console.log(token, userID, email, name);
        localStorage.setItem('token', token);
        // props.history.push(routes.HOME);
      }
    } catch (e) {
      setValues({ ...values, error: e, loading: false });
    }
  };

  const handleChange = name => (event: SyntheticInputEvent<EventTarget>) => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleToggleView = (view: string) => {
    InputProps.toggleView(view);
  };

  const toggleModal = () => {
    InputProps.toggleModal();
  };

  const classes = useStyles();
  return (
    <div>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        onClose={toggleModal}
        open={InputProps.open}
      >
        <Container className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Sign Up with Email
          </Typography>
          <TextField
            className={classes.textField}
            error={!values.email.length === 0 && values.email.length < 6}
            fullWidth
            helperText={
              values.email.length < 6
                ? 'Email must be longer than 6 characters'
                : null
            }
            id="Email"
            label="Email"
            onChange={handleChange('email')}
            placeholder="Email..."
          />
          <TextField
            className={classes.textField}
            error={!values.name.length === 0 && values.name.length < 2}
            fullWidth
            helperText={
              values.name.length < 2
                ? 'Name must be longer than 2 characters'
                : null
            }
            id="Name"
            label="Name"
            onChange={handleChange('name')}
            placeholder="Name..."
          />
          <TextField
            className={classes.textField}
            error={!values.password.length === 0 && values.password.length < 7}
            fullWidth
            helperText={values.password.length < 6 ? 'Length >= 7' : null}
            id="Password"
            label="Password"
            onChange={handleChange('password')}
            placeholder="Password..."
            type={values.showPassword ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="Toggle password visibility"
                    onClick={handleClickShowPassword}
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            className={classes.textField}
            error={values.password !== values.passwordValidation}
            fullWidth
            helperText={
              values.password !== values.passwordValidation
                ? 'Passwords must match'
                : null
            }
            id="passwordValidation"
            label="Re-Enter your password"
            onChange={handleChange('passwordValidation')}
            placeholder="Password..."
            type={values.showPassword ? 'text' : 'password'}
          />
          {values.error ? <p style={{ color: 'red' }}>{values.error}</p> : null}
          <Button
            // TODO Create validation functions to confirm
            className={classes.signupButton}
            disabled={
              values.password.length < 7 ||
              values.password !== values.passwordValidation
            }
            onClick={handleSubmit}
            size="medium"
            variant="contained"
          >
            {values.loading ? 'Verifying...' : 'Sign up'}
          </Button>
          <Divider />
          <Button
            onClick={() => {
              handleToggleView('login');
            }}
            className={classes.loginButton}
          >
            Already have an account? Login
          </Button>
          {values.error ? values.error : null}
        </Container>
      </Modal>
    </div>
  );
};

export default SignUpModal;
