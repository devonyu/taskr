// @flow

import React from 'react';
import Navbar from './components/Navbar';
import TaskContainer from './components/TaskContainer';
// const useUser = () => React.useContext(UserContext)
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )
function AuthenticatedApp(inputProps) {
  return (
    <>
      <Navbar setView={inputProps.setView} />
      <TaskContainer />
    </>
  );
}

export default AuthenticatedApp;
