// @flow

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { getUserTasks } from '../utils/netlifyapi';
import TaskList from './TaskList';
import SingleTaskNetlify from './SingleTaskNetlify';
import FullPageSpinner from './FullPageSpinner';
import { taskContainerInitialState } from '../utils/storeData';

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
  const [state, setState] = useState(taskContainerInitialState);

  const loadTasks = async () => {
    const tasks = await getUserTasks('LS');
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
      {!state && <FullPageSpinner />}
      {state && (
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
            <SingleTaskNetlify
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
      )}
    </div>
  );
}
