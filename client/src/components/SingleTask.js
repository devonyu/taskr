// @flow

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import Radio from '@material-ui/core/Radio';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  submitButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  iconSmall: {
    fontSize: 20,
  },
}));

function SingleTask() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: '',
    progress: null,
    priority: '',
    starred: false,
    startDate: null,
    endDate: null,
    content: '',
    github_branch: '',
    tags: ''
  });

  const handleChange = name => event => {
    if (name === 'starred') {
      setValues({ ...values, [name]: !values[name] });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleSubmit = () => {
    // FlowFixMe
    console.log('Submit clicked');
  };

  const handleClose = () => {
    console.log('Closed clicked');
  };


  return (
    <Container className="Task">
      <div className="TaskHeader">
        <AppBar position="static" color="default">
          <Toolbar>
            <Radio
              checked={values.starred}
              onClick={handleChange('starred')}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              name="starred"
            />
            <Typography variant="h6" color="inherit" className={classes.title}>Create Task</Typography>
            <Button variant="contained" color="primary" className={classes.submitButton} onClick={handleSubmit} >
              Submit
            </Button>
            <Button variant="contained" color="secondary" className={classes.button} onClick={handleClose}>
              <DeleteIcon className={classes.iconSmall} />
            </Button>
          </Toolbar>
        </AppBar>
      </div>
    </Container >
  );
}

export default SingleTask;