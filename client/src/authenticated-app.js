// @flow

import React from 'react';
import Navbar from './components/Navbar';
import TaskContainer from './components/TaskContainer';
import TaskContainerNetlify from './components/TaskContainerNetlify';
// const useUser = () => React.useContext(UserContext)
// const UserProvider = props => (
//   <UserContext.Provider value={useAuth().data.user} {...props} />
// )

// import { useAuth } from './context/auth-context';
// import { useUser } from './context/user-context';

function AuthenticatedApp(inputProps) {
  // const user = useUser();
  // const { logout } = useAuth();
  // console.log(user);
  const { experimental, user, setUser } = inputProps;
  return (
    <>
      <Navbar user={user} setUser={setUser} />
      {experimental ? <TaskContainerNetlify /> : <TaskContainer user={user} />}
    </>
  );
}

export default AuthenticatedApp;
