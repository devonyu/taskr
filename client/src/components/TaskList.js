// @flow

import React from 'react';
import MaterialTable from 'material-table';
import moment from 'moment';
import { exampleTasks, progressOptions, priorityOptions } from '../data';

export default function TaskList() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Star', field: 'starred', type: 'boolean' },
      { title: 'Title', field: 'title' },
      {
        title: 'Progress',
        field: 'progress',
        type: 'numeric',
        render: rowData => (
          <p>
            {
              progressOptions.find(option => option.value === rowData.progress)
                .label
            }
          </p>
        ),
      },
      {
        title: 'Priority',
        field: 'priority',
        type: 'numeric',
        render: rowData => (
          <p>
            {
              priorityOptions.find(option => option.value === rowData.priority)
                .label
            }
          </p>
        ),
      },
      {
        title: 'Start Date',
        field: 'startDateUnix',
        type: 'datetime',
        render: rowData => (
          <p>{moment(rowData.startDateUnix).format('MMM D, YYYY')}</p>
        ),
      },
      {
        title: 'Target Date',
        field: 'targetDateUnix',
        type: 'datetime',
        render: rowData => (
          <p>{moment(rowData.targetDateUnix).format('MMM D, YYYY')}</p>
        ),
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
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
      detailPanel={[
        {
          tooltip: 'Show Title',
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#43A047',
                }}
              >
                {rowData.title}
              </div>
            );
          },
        },
        {
          icon: 'tags',
          tooltip: 'Show tags',
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#E53935',
                }}
              >
                {rowData.tags}
              </div>
            );
          },
        },
        {
          icon: 'favorite_border',
          openIcon: 'favorite',
          tooltip: 'Show Task Content',
          render: rowData => {
            return (
              <div
                style={{
                  fontSize: 20,
                  textAlign: 'center',
                  color: 'white',
                  backgroundColor: '#FDD835',
                }}
              >
                {rowData.content}
              </div>
            );
          },
        },
      ]}
    />
  );
}
