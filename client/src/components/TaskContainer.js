// @flow

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Star, StarBorder } from '@material-ui/icons';
import { priorityOptions, progressOptions } from '../data';
import TaskList from './TaskList';
import SingleTask from './SingleTask';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function TaskContainer() {
  const classes = useStyles();
  const [state, setState] = useState({
    columns: [
      {
        title: 'Star',
        field: 'starred',
        type: 'boolean',
        cellStyle: {
          backgroundColor: 'grey',
          color: 'blue',
        },
        render: rowData =>
          rowData && rowData.starred ? <Star /> : <StarBorder />,
      },
      { title: 'Title', field: 'title' },
      {
        title: 'Progress',
        field: 'progress',
        type: 'numeric',
        render: rowData => (
          <p>
            {rowData &&
              rowData.progress &&
              progressOptions.find(option => option.value === rowData.progress)
                .label}
          </p>
        ),
      },
      {
        title: 'Priority',
        field: 'priority',
        type: 'numeric',
        render: rowData => (
          <p>
            {rowData &&
              rowData.priority &&
              priorityOptions.find(option => option.value === rowData.priority)
                .label}
          </p>
        ),
      },
      {
        title: 'Start Date',
        field: 'startDateUnix',
        type: 'datetime',
        render: rowData => (
          <p>{moment(rowData.startDateUnix).format('M/D/YY')}</p>
        ),
      },
      {
        title: 'Target Date',
        field: 'targetDateUnix',
        type: 'datetime',
        render: rowData => (
          <p>{moment(rowData.targetDateUnix).format('M/D/YY')}</p>
        ),
      },
      {
        title: 'Tags',
        field: 'tags',
        type: 'string',
      },
    ],
    data: [],
    selectedTask: 0,
  });

  useEffect(() => {
    axios.get('http://localhost:3000/dynamomulti').then(
      response => {
        const { Items } = response.data;
        const mapped = Items.map(original => {
          const formated = {
            ...original.task,
          };
          formated.email = original.email;
          formated.taskID = original.taskID;
          formated.newTask = false;
          return formated;
        });
        setState({ ...state, data: mapped });
      },
      error => {
        console.log(error);
      },
    );
  }, []);

  const toggleTask = data => {
    const selectedRow = data.tableData.id;
    setState({ ...state, selectedTask: selectedRow });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <TaskList tasks={state} toggleTask={toggleTask} />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <SingleTask taskData={state.data[state.selectedTask]} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
