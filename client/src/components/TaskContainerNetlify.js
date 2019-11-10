// @flow

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Star, StarBorder } from '@material-ui/icons';
import localforage from 'localforage';
import { priorityOptions, progressOptions } from '../data';
import TaskList from './TaskList';
import SingleTask from './SingleTask';

const useStyles = makeStyles(() => ({
  root: {
    lineHeight: 1,
    minHeight: '100%',
    maxHeight: '100%',
    maxWidth: '100%',
    overflow: 'hidden',
  },
}));

export default function TaskContainerNetlify() {
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
              rowData.progress !== undefined &&
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
              rowData.priority !== undefined &&
              priorityOptions.find(option => option.value === rowData.priority)
                .label}
          </p>
        ),
      },
      {
        title: 'Start',
        field: 'startDateUnix',
        type: 'datetime',
        render: rowData => (
          <p>{moment(rowData.startDateUnix).format('M/D/YY')}</p>
        ),
      },
      {
        title: 'Target',
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

  const loadTasks = async () => {
    localforage
      .setItem('testz', 'localforage is awesome')
      .then(() => {
        return localforage.getItem('testz');
      })
      .then(value => {
        const task = {
          email: 'devon@taskr.online',
          taskID: 'sasdfasdfasdf',
          content: 'create netlify',
          github: null,
          priority: 2,
          progress: 3,
          starred: false,
          startDate: null,
          startDateUnix: null,
          tags: null,
          targetDate: null,
          targetDateUnix: null,
          title: 'netlify this task netlify',
        };
        console.log(value);
        setState({ ...state, data: [task] });
      })
      .catch(error => {
        console.log(error);
      });
    console.log('whatsup');
  };

  useEffect(() => {
    loadTasks();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
