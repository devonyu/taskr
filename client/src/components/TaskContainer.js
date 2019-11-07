// @flow

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Star, StarBorder } from '@material-ui/icons';
import { priorityOptions, progressOptions } from '../data';
import TaskList from './TaskList';
import SingleTask from './SingleTask';

const useStyles = makeStyles(() => ({
  root: {
    lineHeight: 1,
    minHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
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
          backgroundColor: 'lightgrey',
          color: 'yellow',
          whiteSpace: 'nowrap',
          padding: '2px',
          width: '10px',
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
    newTask: false,
  });

  const loadTasks = () => {
    axios.get('/dynamomulti').then(
      response => {
        const { Items } = response.data;
        console.log(Items);
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
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const toggleTask = data => {
    const selectedRow = data.tableData.id;
    setState({ ...state, newTask: false, selectedTask: selectedRow });
  };

  const createTask = () => {
    setState({ ...state, newTask: true, selectedTask: 9999 });
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TaskList
            tasks={state}
            toggleTask={toggleTask}
            createTask={createTask}
          />
        </Grid>
        <Grid item xs={6}>
          <SingleTask
            taskData={state.data[state.selectedTask]}
            loadTasks={loadTasks}
            newTask={state.newTask}
          />
        </Grid>
      </Grid>
    </div>
  );
}
