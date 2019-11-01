// @flow

import axios from 'axios';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CreatableSelect from 'react-select/creatable';
import { Delete, SendSharp, Star, StarBorder } from '@material-ui/icons';
import MenuItem from '@material-ui/core/MenuItem';
import MomentUtils from '@date-io/moment';
import Paper from '@material-ui/core/Paper';
import Radio from '@material-ui/core/Radio';
import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import moment from 'moment';
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import {
  addID,
  convertTagsArray,
  convertTagsStrings,
} from '../utils/commonTools';
import { priorityOptions, progressOptions, tagOptions } from '../data';
import TaskEditor from './TaskEditor';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: '#f5f5f5',
  },
  submitButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontSize: 25,
    fontWeight: 900,
  },
  iconSmall: {
    fontSize: 20,
  },
  button: {
    display: 'block',
    marginTop: theme.spacing(2),
  },
  datePicker: {
    margin: theme.spacing(1),
    maxWidth: 115,
  },
  dropDown: {
    margin: theme.spacing(1),
    minWidth: 150,
  },
  github: {
    margin: theme.spacing(1),
    minWidth: 200,
  },
  midSection: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  },
}));

function SingleTask(inputProps) {
  const initialState = {
    id: '',
    content: '',
    github: '',
    priority: 0,
    progress: 0,
    starred: false,
    startDate: null,
    startDateUnix: null,
    tags: [],
    targetDate: null,
    targetDateUnix: null,
    title: '',
  };
  const classes = useStyles();
  const [values, setValues] = useState(inputProps.taskData);

  useEffect(() => {
    setValues(inputProps.taskData);
  }, [inputProps.taskData]);

  const handleChange = (name: string) => (
    event: SyntheticInputEvent<EventTarget>,
  ) => {
    if (name === 'starred') {
      setValues({ ...values, starred: !values.starred });
    } else if (name === 'title') {
      setValues({ ...values, title: event.target.value });
    } else if (name === 'progress') {
      setValues({ ...values, progress: event.target.value });
    } else if (name === 'priority') {
      setValues({ ...values, priority: event.target.value });
    } else if (name === 'github') {
      setValues({ ...values, github: event.target.value });
    }
    console.log(inputProps.taskData);
  };

  const handleGetContent = content => {
    setValues({ ...values, content });
  };

  const handleDateChange = (date: string) => (selectedDate: string) => {
    const dateUnix = moment(selectedDate).unix() * 1000;
    const dateUnixKey = `${date}Unix`;
    setValues({ ...values, [date]: selectedDate, [dateUnixKey]: dateUnix });
  };

  const sanitizeValues = task => {
    let taskCopy = { ...task };
    if (task.id === '') {
      taskCopy = addID(taskCopy);
    }
    taskCopy.tags = convertTagsArray(task.tags);
    return taskCopy;
  };

  const handleSubmit = () => {
    console.log('submitted..');
    const data = sanitizeValues(values);
    console.log(data);
    console.log(data.newTask);
    if (data.newTask) {
      axios.post('http://localhost:3000/addtask', data).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
      );
    } else if (!data.newTask) {
      axios.put('http://localhost:3000/updatetask', data).then(
        response => {
          console.log(response);
        },
        error => {
          console.log(error);
        },
      );
    }
  };

  const handleClearTask = () => {
    setValues({ ...initialState });
  };

  const handleTag = tag => {
    if (tag === null) {
      setValues({ ...values, tags: [] });
    } else {
      setValues({ ...values, tags: tag });
    }
  };

  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <Container className="Task">
        <Paper className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Radio
                checked={values && Boolean(values.starred)}
                onClick={handleChange('starred')}
                icon={<StarBorder />}
                checkedIcon={<Star />}
                name="starred"
              />
              <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
              >
                {values && values.title && values.title.length
                  ? values.title
                  : 'Create Task'}
              </Typography>
              <Tooltip title="Save Task">
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.submitButton}
                  onClick={handleSubmit}
                >
                  <SendSharp className={classes.iconSmall} />
                </Button>
              </Tooltip>
              <Tooltip title="Clear Task">
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleClearTask}
                >
                  <Delete className={classes.iconSmall} />
                </Button>
              </Tooltip>
            </Toolbar>
          </AppBar>
          <TextField
            error={values && !!(values.title && values.title.length < 1)}
            fullWidth
            id="title"
            label="Title"
            onChange={handleChange('title')}
            placeholder="Title..."
            style={{ margin: 8 }}
            value={values && values.title}
          />
          <div className={classes.midSection}>
            <TextField
              className={classes.dropDown}
              id="progress"
              label="Progress"
              onChange={handleChange('progress')}
              select
              value={values && values.progress}
              variant="outlined"
            >
              {progressOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              className={classes.dropDown}
              id="priority"
              label="Priority"
              onChange={handleChange('priority')}
              select
              value={values && values.priority}
              variant="outlined"
            >
              {priorityOptions.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <DatePicker
              animateYearScrolling
              className={classes.datePicker}
              label="Start Date"
              minDate={Date.now()}
              maxDate={
                values && values.targetDate
                  ? values.targetDate
                  : moment('9999-01-01')
              }
              onChange={handleDateChange('startDate')}
              value={values && values.startDate}
            />
            <DatePicker
              animateYearScrolling
              className={classes.datePicker}
              label="Target Date"
              minDate={
                values && values.startDate ? values.startDate : Date.now()
              }
              onChange={handleDateChange('targetDate')}
              value={values && values.targetDate}
            />
            <TextField
              className={classes.github}
              id="github"
              label="Github"
              onChange={handleChange('github')}
              placeholder="Github link..."
              value={values && values.github}
            />
          </div>
          <TaskEditor
            getContent={handleGetContent}
            inputContent={(values && values.content) || ''}
          />
          <CreatableSelect
            allowCreateWhileLoading={false}
            createOptionPosition="last"
            formatCreateLabel={newTag => `Add ${newTag}..`}
            getNewOptionData={(inputValue, optionLabel) => ({
              label: optionLabel,
              value: inputValue,
              __isNew__: true,
            })}
            isClearable
            isMulti
            isValidNewOption={value => !value.includes(' ')}
            menuPlacement="auto"
            onChange={handleTag}
            options={tagOptions}
            placeholder="Enter tags..."
            value={
              (values && values.tags && convertTagsStrings(values.tags)) || []
            }
          />
        </Paper>
      </Container>
    </MuiPickersUtilsProvider>
  );
}

export default SingleTask;
