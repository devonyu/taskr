import moment from 'moment';
import { Star, StarBorder } from '@material-ui/icons';
import React from 'react';
import { priorityOptions, progressOptions } from '../data';

export const taskContainerInitialState = {
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
            progressOptions.find(
              option => option.value === Number(rowData.progress),
            ).label}
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
            priorityOptions.find(
              option => option.value === Number(rowData.priority),
            ).label}
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
};

export const singleTaskInitialState = {
  content: '',
  email: '',
  github: '',
  newTask: false,
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
