// @flow

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import { Star, StarBorder } from '@material-ui/icons';
import { priorityOptions, progressOptions } from '../data';
import { getUserTasks } from '../utils/netlifyapi';
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
    const tasks = await getUserTasks('devon@taskr.online');
    return tasks;
  };

  useEffect(() => {
    loadTasks().then(tasks => {
      setState({ ...state, data: tasks });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTask = data => {
    const selectedRow = data.tableData.id;
    setState({ ...state, newTask: false, selectedTask: selectedRow });
  };

  const createTask = () => {
    setState({ ...state, newTask: true, selectedTask: 9999 });
  };

  const updateState = (task, action) => {
    console.log('updating netlify tasks');
    let updatedList;
    if (action === 'update') {
      updatedList = state.data.map(existingTask =>
        task.taskID === existingTask.taskID ? task : existingTask,
      );
    } else if (action === 'create') {
      updatedList = [task].concat(state.data);
    } else if (action === 'delete') {
      updatedList = state.data.filter(
        existingTask => task.taskID !== existingTask.taskID,
      );
    }
    setTimeout(() => {
      setState({ ...state, data: updatedList });
    }, 1500);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <TaskList
            tasks={state}
            columns={state.columns}
            data={state.data}
            toggleTask={toggleTask}
            createTask={createTask}
          />
        </Grid>
        <Grid item xs={6}>
          <SingleTask
            taskData={
              state.selectedTask !== undefined && state.selectedTask !== 9999
                ? state.data[state.selectedTask]
                : {}
            }
            loadTasks={loadTasks}
            newTask={state.newTask}
            updateState={updateState}
          />
        </Grid>
      </Grid>
    </div>
  );
}
