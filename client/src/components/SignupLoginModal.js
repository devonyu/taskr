// @flow

import React from 'react';
import Button from '@material-ui/core/Button';
import LoginModal from './LoginModal';
import SignUpModal from './SignUpModal';

function SignupLoginModal() {
  const [open, setOpen] = React.useState(false);
  const [view, setView] = React.useState('signup');

  const toggleModal = () => {
    setOpen(!open);
  };

  const toggleView = (views: string) => {
    setView(views);
  };

  return (
    <div>
      <Button id="startButton" onClick={toggleModal}>Get Started</Button>
      {open && view === 'signup' ? <SignUpModal toggleView={toggleView} open={open} toggleModal={toggleModal} /> : null}
      {open && view === 'login' ? <LoginModal toggleView={toggleView} open={open} toggleModal={toggleModal} /> : null}
    </div>
  );
}

export default SignupLoginModal;