// @flow

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    height: 400,
    top: '50%',
    left: '50%',
    transform: `translate(-50%, -50%)`,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
  },
  submitBro: {
    backgroundColor: '#3ddb93',
    borderRadius: 10,
    color: 'white',
    top: 10,
  }
}));

function LoginModal(InputProps) {
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

  const handleToggleView = (view) => {
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
        open={InputProps.open}
        onClose={toggleModal}
      >
        <Container className={classes.paper}>
          <Typography variant="h6" id="modal-title">
            Login
          </Typography>
          <TextField
            onChange={handleChange('email')}
            error={values.email.length < 6 ? true : false}
            helperText={values.email.length < 6 ? "Email must be longer than 6 characters" : null}
            id="Email"
            label="Email"
            style={{ margin: 8 }}
            placeholder="Email..."
            fullWidth
          />
          <TextField
            onChange={handleChange('password')}
            id="Password"
            error={values.password.length < 7}
            label="Password"
            style={{ margin: 8 }}
            placeholder="Password..."
            type={values.showPassword ? 'text' : 'password'}
            helperText="Length >= 7"
            fullWidth
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
            onClick={handleSubmit}
            variant="contained"
            size="medium"
            className={classes.submitBro}>
            Login
          </Button>

          <Button onClick={() => { handleToggleView('signup'); }}>Signup</Button>
        </Container>
      </Modal>
    </div>
  );
}

export default LoginModal;