// @flow

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

type InputProps = {
  toggleView: (view: string) => void,
  toggleModal: () => void,
  open: boolean,
}

const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper,
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
    backgroundColor: '#3ddb93',
    borderRadius: 10,
    color: 'white',
    marginBottom: 30,
    top: 10,
    width: "100%",
  },
  signupButton: {
    backgroundColor: 'red',
    borderRadius: 10,
    color: 'white',
    top: 10,
    width: "100%",
  },
  textField: {
    margin: 8,
  }
}));

const LoginModal = (InputProps: InputProps) => {
  const [values, setValues] = React.useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleSubmit = () => {
    console.log('Submitting for login...');
    console.log(values);
  };

  const handleChange = name => event => {
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
        aria-describedby="simple-modal-description"
        aria-labelledby="simple-modal-title"
        onClose={toggleModal}
        open={InputProps.open}
      >
        <Container className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Login
          </Typography>
          <TextField
            className={classes.textField}
            fullWidth
            id="Email"
            label="Email"
            onChange={handleChange('email')}
            placeholder="Email..."
          />
          <TextField
            className={classes.textField}
            fullWidth
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
          <Button
            // TODO Create validation functions to confirm
            className={classes.loginButton}
            onClick={handleSubmit}
            size="medium"
            variant="contained">
            Login
          </Button>
          <Divider />
          <Button
            onClick={() => { handleToggleView('signup'); }}
            className={classes.signupButton}>
            Don’t have an account? Signup
          </Button>
        </Container>
      </Modal>
    </div>
  );
};

export default LoginModal;