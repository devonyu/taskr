// @flow

import React, { useState, Suspense, lazy } from 'react';
// import { useUser } from './context/user-context';

import FullPageSpinner from './components/FullPageSpinner';

const loadAuthenticatedApp = () => import('./authenticated-app');
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import('./unauthenticated-app'));

function App() {
  const [user, setUser] = useState(null);
  // const user = useUser();
  // const user = false;
  console.log(user);
  const authUser = userID => {
    setUser(userID);
  };

  React.useEffect(() => {
    loadAuthenticatedApp();
  }, []);
  return (
    <Suspense fallback={<FullPageSpinner />}>
      {user !== null ? (
        <AuthenticatedApp
          experimental={user === 'LS'}
          setUser={authUser}
          user={user}
        />
      ) : (
        <UnauthenticatedApp setUser={authUser} />
      )}
    </Suspense>
  );
}

export default App;
