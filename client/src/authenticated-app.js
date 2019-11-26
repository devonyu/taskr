// @flow

import React from 'react';
import Navbar from './components/Navbar';
import TaskContainer from './components/TaskContainer';
// const useUser = () => React.useContext(UserContext)
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )

import { useAuth } from './context/auth-context';
import { useUser } from './context/user-context';

function AuthenticatedApp(inputProps) {
  const user = useUser();
  const { logout } = useAuth();
  console.log(user);
  return (
    <>
      <Navbar setView={inputProps.setView} user={user} />
      <TaskContainer user={user} />
    </>
  );
}

export default AuthenticatedApp;
