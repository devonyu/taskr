import localforage from 'localforage';

export const saveUser = email => {
  localforage
    .setItem(email, [])
    .then(() => {
      return localforage.getItem(email);
    })
    .then(value => {
      console.log(value);
      return value;
    })
    .catch(error => {
      console.log(error);
    });
};

export const getUserTasks = async email => {
  const storage = [];
  const length = await localforage.length();
  const result = await localforage
    .iterate((value, key, iterationNumber) => {
      if (iterationNumber < length) {
        console.log([key, value]);
        storage.push(value);
      } else {
        return storage;
      }
    })
    .then(result => {
      console.log('Iteration has completed, last iterated pair:');
      console.log(result);
      return result;
    })
    .catch(err => {
      // This code runs if there were any errors
      console.log(err);
    });
  return result;
};

export const saveTask = async task => {
  const { taskID, email } = task;
  await localforage
    .setItem(taskID, task)
    .then(() => {
      return localforage.getItem(taskID);
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateTask = (email, task) => {
  localforage
    .setItem('testz', 'localforage is awesome')
    .then(() => {
      return localforage.getItem('testz');
    })
    .then(value => {
      console.log(value);
      // setState({ ...state, data: exampleTasks });
      return value;
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteTask = (email, task) => {
  localforage
    .setItem('testz', 'localforage is awesome')
    .then(() => {
      return localforage.getItem('testz');
    })
    .then(value => {
      console.log(value);
      // setState({ ...state, data: exampleTasks });
      return value;
    })
    .catch(error => {
      console.log(error);
    });
};
