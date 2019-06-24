// @flow

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import DeleteIcon from '@material-ui/icons/Delete';
import Radio from '@material-ui/core/Radio';
import React from 'react';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Editor } from '@tinymce/tinymce-react';
import { makeStyles } from '@material-ui/core/styles';

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
  const initialState = {
    title: '',
    progress: null,
    priority: '',
    starred: false,
    startDate: null,
    endDate: null,
    content: '',
    github_branch: '',
    tags: ''
  };
  const classes = useStyles();
  const [values, setValues] = React.useState(initialState);

  const handleChange = name => event => {
    if (name === 'starred') {
      setValues({ ...values, starred: !values.starred });
    } else {
      setValues({ ...values, [name]: event.target.value });
    }
  };

  const handleEditorChange = (content) => {
    setValues({ ...values, content: content });
  };

  const handleSubmit = () => {
    // FlowFixMe
    console.log('Submit clicked');
    setValues({ ...values });
  };

  const handleClose = () => {
    console.log('Closed clicked');
    setValues({ ...initialState });
  };

  return (
    <Container className="Task">
      <div className="TaskHeader">
        <AppBar position="static" color="default">
          <Toolbar>
            <Radio
              checked={Boolean(values.starred)}
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
          error={values.title && values.title.length < 1 ? true : false}
          id="title"
          label="Title"
          style={{ margin: 8 }}
          placeholder="Title..."
          value={values.title}
          fullWidth
        />
        <Editor
          apiKey={process.env.REACT_APP_TINYMCE_API_KEY}
          initialValue="<p>Testing the editor here</p>"
          init={{
            plugins: 'link image code preview lists insertdatetime table',
            toolbar: 'preview | undo redo | bold italic | forecolor backcolor | alignleft aligncenter alignright | code | numlist bullist table insertdatetime',
            height: 400
          }}
          onEditorChange={handleEditorChange}
          value={values.content}
        />
      </div>
    </Container >
  );
}

export default SingleTask;