// @flow

import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CreatableSelect from 'react-select/creatable';
import DeleteIcon from '@material-ui/icons/Delete';
import Radio from '@material-ui/core/Radio';
import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Star from '@material-ui/icons/Star';
import StarBorder from '@material-ui/icons/StarBorder';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Editor } from '@tinymce/tinymce-react';
import { makeStyles } from '@material-ui/core/styles';
import { tagOptions, priority, progress } from '../data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#f5f5f5'
  },
  submitButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  iconSmall: {
    fontSize: 20,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  dropDown: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
}));

function SingleTask() {
  const initialState = {
    title: '',
    progress: '',
    priority: '',
    starred: false,
    startDate: null,
    endDate: null,
    content: '',
    github_branch: '',
    tags: []
  };
  const classes = useStyles();
  const [values, setValues] = React.useState(initialState);

  const handleChange = (name: string) => (event: SyntheticEvent<HTMLInputElement>) => {
    if (name === 'starred') {
      setValues({ ...values, starred: !values.starred });
    } else if (name === 'title') {
      setValues({ ...values, title: event.currentTarget.value });
    } else if (name === 'progress') {
      setValues({ ...values, progress: event.target.value });
    } else if (name === 'priority') {
      setValues({ ...values, priority: event.target.value });
    }
  };

  const handleEditorChange = (content: string) => {
    setValues({ ...values, content: content });
  };

  const handleSubmit = () => {
    setValues({ ...values });
    console.log(`Submit clicked, Sending to backend...`);
    console.log(values);
  };

  const handleClose = () => {
    console.log('Closed clicked, setting initialState');
    setValues({ ...initialState });
  };

  const handleTag = (tag) => {
    if (tag === null) {
      setValues({ ...values, tags: [] });
    } else {
      setValues({ ...values, tags: tag });
    }
  }

  return (
    <Container className="Task">
      <Paper className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Radio
              checked={Boolean(values.starred)}
              onClick={handleChange('starred')}
              icon={<StarBorder />}
              checkedIcon={<Star />}
              name="starred"
            />
            <Typography variant="h6" color="inherit" className={classes.title}>{values.title.length ? values.title : 'Create Task'}</Typography>
            <Button variant="contained" color="primary" className={classes.submitButton} onClick={handleSubmit} >
              Submit
            </Button>
            <Button variant="contained" color="secondary" onClick={handleClose}>
              <DeleteIcon className={classes.iconSmall} />
            </Button>
          </Toolbar>
        </AppBar>
        <TextField
          error={values.title && values.title.length < 1 ? true : false}
          fullWidth
          id="title"
          label="Title"
          onChange={handleChange('title')}
          placeholder="Title..."
          style={{ margin: 8 }}
          value={values.title}
        />
        <TextField
          className={classes.dropDown}
          id="progress"
          label='Progress'
          onChange={handleChange('progress')}
          select
          value={values.progress}
          variant="outlined"
        >
          {progress.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          className={classes.dropDown}
          id="priority"
          label='Priority'
          onChange={handleChange('priority')}
          select
          value={values.priority}
          variant="outlined"
        >
          {priority.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
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
        <CreatableSelect
          isClearable
          isMulti
          menuPlacement="auto"
          onChange={handleTag}
          options={tagOptions}
          placeholder="Enter tags..."
        />
      </Paper>
    </Container>
  );
}

export default SingleTask;