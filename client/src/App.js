// @flow

import './App.css';
import React, { useState, Suspense, lazy } from 'react';
import { useUser } from './context/user-context';

import FullPageSpinner from './components/FullPageSpinner';

const loadAuthenticatedApp = () => import('./authenticated-app');
const AuthenticatedApp = lazy(loadAuthenticatedApp);
const UnauthenticatedApp = lazy(() => import('./unauthenticated-app'));

function App() {
  const [view, setView] = useState('home');
  const user = useUser();
  // const user = false;
  console.log(user);
  React.useEffect(() => {
    loadAuthenticatedApp();
  }, []);
  return (
    <Suspense fallback={<FullPageSpinner />}>
      {user || view !== 'home' ? (
        <AuthenticatedApp setView={setView} />
      ) : (
        <UnauthenticatedApp setView={setView} />
      )}
    </Suspense>
  );
}

export default App;
