// @flow

import AccountCircle from '@material-ui/icons/AccountCircle';
import AppBar from '@material-ui/core/AppBar';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import React from 'react';
import Switch from '@material-ui/core/Switch';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appbar: {
    background: 'white',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    color: '#3ddb93',
  },
  title: {
    flexGrow: 1,
    color: '#3ddb93',
  },
}));

export default function Navbar(inputProps) {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  if (auth === true) {
    inputProps.setView('tasks');
  } else {
    inputProps.setView('home');
  }

  function handleChange(event) {
    setAuth(event.target.checked);
  }

  function handleLogout() {
    setAuth(false);
    setAnchorEl(null);
  }

  function handleMenu(event) {
    setAnchorEl(event.currentTarget);
  }

  function handleClose() {
    setAnchorEl(null);
  }

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.appbar}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            aria-label="Menu"
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  aria-label="LoginSwitch"
                  checked={auth}
                  onChange={handleChange}
                />
              }
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>
          <Typography className={classes.title} variant="h6">
            TaskR
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-controls="menu-appbar"
                aria-haspopup="true"
                aria-label="Account of current user"
                color="inherit"
                onClick={handleMenu}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                id="menu-appbar"
                keepMounted
                onClose={handleClose}
                open={open}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >
                <MenuItem onClick={handleClose}>My account</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
