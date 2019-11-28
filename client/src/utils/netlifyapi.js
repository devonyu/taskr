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
      console.log('Iteration has completed, Tasklist below:');
      return Array.isArray(results) && results.length ? results : [];
    })
    .catch(err => {
      console.log(err);
    });
  return result;
};

// export const saveTask = async task => {
//   const { taskID } = task;
//   let finished = false;
//   try {
//     finished = await localforage
//       .setItem(taskID, task)
//       .then(async () => {
//         const savedTask = await localforage.getItem(taskID);
//         return savedTask;
//       })
//       .catch(error => {
//         console.log(error);
//         return null;
//       });
//   } catch (error) {
//     console.log(error);
//     return null;
//   }
//   return finished;
// };

export const saveTask = task => {
  const { taskID } = task;
  localforage.setItem(taskID, task);
  const savedTask = localforage.getItem(taskID);
  if (savedTask !== null) {
    return savedTask;
  }
  return null;
};

// export const updateTask = async task => {
//   const { taskID } = task;
//   await localforage
//     .getItem(taskID)
//     .then(async () => {
//       const updatedItem = await localforage.setItem(taskID, task);
//       return updatedItem;
//     })
//     .catch(error => {
//       console.log(error);
//     });
// };

export const updateTask = async task => {
  const { taskID } = task;
  localforage.setItem(taskID, task);
  const updatedTask = localforage.getItem(taskID);
  if (updatedTask !== null) {
    return updatedTask;
  }
  return null;
  // await localforage
  //   .getItem(taskID)
  //   .then(async () => {
  //     const updatedItem = await localforage.setItem(taskID, task);
  //     return updatedItem;
  //   })
  //   .catch(error => {
  //     console.log(error);
  //   });
};

export const deleteTask = async taskID => {
  await localforage
    .removeItem(taskID)
    .then(async () => {
      const deletedItem = await localforage.getItem(taskID);
      if (deletedItem === null) {
        console.log('deleted!');
      } else {
        console.log('Error deleting!');
      }
      return deletedItem;
    })
    .catch(error => {
      console.log(error);
    });
};
