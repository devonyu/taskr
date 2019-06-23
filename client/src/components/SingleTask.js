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
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { Editor } from '@tinymce/tinymce-react';


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
    } else if (name === 'content') {
      setValues({ ...values, content: event.target.getContent() });
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
        <TextField
          onChange={handleChange('title')}
          error={values.title.length < 1 ? true : false}
          id="title"
          label="title"
          style={{ margin: 8 }}
          placeholder="Title..."
          fullWidth
        />
        <Editor
          apiKey='YOUR_API_KEY'
          initialValue="<p>Testing the editor here</p>"
          init={{
            plugins: 'link image code',
            toolbar: 'undo redo | bold italic | alignleft aligncenter alignright | code'
          }}
          onChange={handleChange('content')}
        />
      </div>
    </Container >
  );
}

export default SingleTask;