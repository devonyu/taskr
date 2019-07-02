// @flow

import React from 'react';
import MaterialTable from 'material-table';
import { exampleTasks } from '../data';

export default function TaskList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Star', field: 'star', type: 'boolean' },
      { title: 'Title', field: 'title' },
      { title: 'Content', field: 'content' },
      { title: 'Progress', field: 'progress', type: 'numeric' },
      {
        title: 'Priority',
        field: 'priority',
        type: 'numeric',
      },
      {
        title: 'Start Date',
        field: 'startDate',
        type: 'date',
      },
      {
        title: 'Target Date',
        field: 'targetDate',
        type: 'date',
      },
      {
        title: 'Tags',
        field: 'tags',
        type: 'string',
      },
    ],
    data: exampleTasks,
  });

  return (
    <MaterialTable
      title="Tasks"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: newData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.push(newData);
              setState({ ...state, data });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data[data.indexOf(oldData)] = newData;
              setState({ ...state, data });
            }, 600);
          }),
        onRowDelete: oldData =>
          new Promise(resolve => {
            setTimeout(() => {
              resolve();
              const data = [...state.data];
              data.splice(data.indexOf(oldData), 1);
              setState({ ...state, data });
            }, 600);
          }),
      }}
    />
  );
}
