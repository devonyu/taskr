// @flow

import React from 'react';
import MaterialTable from 'material-table';

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
    />
  );
}

export default TaskList;
