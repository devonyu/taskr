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
      if (iterationNumber <= length) {
        storage.push(value);
      }
      if (iterationNumber === length) {
        return storage;
      }
    })
    .then(results => {
      console.log('Iteration has completed, last iterated pair:');
      console.log(results);
      return results;
    })
    .catch(err => {
      // This code runs if there were any errors
      console.log(err);
    });
  return result;
};

export const saveTask = async task => {
  const { taskID } = task;
  await localforage
    .setItem(taskID, task)
    .then(() => {
      return localforage.getItem(taskID);
    })
    .catch(error => {
      console.log(error);
    });
};

export const updateTask = task => {
  const { taskID } = task;
  localforage
    .getItem(taskID)
    .then(() => {
      return localforage.setItem(taskID, task);
    })
    .then(value => {
      return value;
    })
    .catch(error => {
      console.log(error);
    });
};

export const deleteTask = async taskID => {
  await localforage
    .removeItem(taskID)
    .then(() => {
      return localforage.getItem(taskID);
    })
    .catch(error => {
      console.log(error);
    });
};