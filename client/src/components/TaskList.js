// @flow

import React from 'react';
import MaterialTable from 'material-table';
// import Button from '@material-ui/core/Button';

function TaskList(inputProps) {
  return (
    <MaterialTable
      title="Tasks"
      columns={inputProps.tasks.columns}
      data={inputProps.tasks.data}
      onRowClick={(event, rowData) => inputProps.toggleTask(rowData)}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
        },
        rowStyle: {
          backgroundColor: '#EEE',
        },
      }}
      actions={[
        {
          // icon: 'add',
          icon: () => 'Create',
          title: 'what',
          tooltip: 'Add Task',
          isFreeAction: true,
          onClick: () => inputProps.createTask(),
        },
      ]}
    />
  );
}

export default TaskList;
