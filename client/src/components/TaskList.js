// @flow

import React from 'react';
import MaterialTable from 'material-table';

function TaskList(inputProps) {
  return (
    <MaterialTable
      title="Tasks"
      columns={inputProps.columns}
      data={inputProps.data}
      onRowClick={(event, rowData) => inputProps.toggleTask(rowData)}
      options={{
        headerStyle: {
          backgroundColor: '#01579b',
          color: '#FFF',
          width: '1%',
          padding: '2px',
        },
        rowStyle: {
          backgroundColor: '#EEE',
          width: '1%',
        },
        maxBodyHeight: '80vh', // set to viewport
        minBodyHeight: '80vh', // it should be set minus height of navbar?
        pageSize: 10,
        pageSizeOptions: [10, 20, 30],
        padding: 'dense',
        emptyRowsWhenPaging: false,
      }}
      actions={[
        {
          icon: 'add',
          tooltip: 'Add Task',
          isFreeAction: true,
          onClick: () => inputProps.createTask(),
        },
      ]}
    />
  );
}

export default TaskList;
