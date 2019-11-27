// @flow

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TaskList from './TaskList';
import SingleTask from './SingleTask';
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
const TaskContainer = () => {
  const classes = useStyles();
  const [state, setState] = useState(taskContainerInitialState);

  const loadTasks = async () => {
    const tasks = await axios.get('/dynamomulti').then(
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
        // DOUBLE CHECK BEST PRACTICE FOR USEEFFECT AND STATE
        setState({ ...state, data: mapped });
        return mapped;
      },
      error => {
        console.log(error);
      },
    );
    return tasks;
  };

  useEffect(() => {
    let isTasksLoaded = true;
    loadTasks().then(tasks => {
      if (isTasksLoaded) {
        setState({ ...state, data: tasks });
      }
    });
    return () => (isTasksLoaded = false);
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
      {!state && <FullPageSpinner />}
      {state && (
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
      )}
    </div>
  );
};

export default TaskContainer;
