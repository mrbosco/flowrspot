import React from 'react';

import Button from '../Button';
import AuthNavPart from './AuthNavPart';
import useModalStore from '../../stores/useModalStore';
import { useIsLoggedIn } from '../../stores/useAuthStore';

const AuthLinks: React.FC = () => {
  const { openModal } = useModalStore();
  const isLoggedIn = useIsLoggedIn();

  if (isLoggedIn) {
    return <AuthNavPart />;
  }

  return (
    <>
      <span onClick={() => openModal('login')}>Login</span>
      <Button rounded={true} onClick={() => openModal('signup')}>
        New Account
      </Button>
    </>
  );
};

export default AuthLinks;
