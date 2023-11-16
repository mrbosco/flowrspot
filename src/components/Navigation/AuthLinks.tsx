import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../Button';
import styles from './styles.module.scss';

import useModalStore from '../../stores/useModalStore';
import { useIsLoggedIn } from '../../stores/useAuthStore';
import useUserInfo from '../../hooks/auth/useUserInfo';

const AuthLinks: React.FC = () => {
  const { openModal } = useModalStore();
  const isLoggedIn = useIsLoggedIn();
  const { user } = useUserInfo();

  if (isLoggedIn) {
    return (
      <div className={styles.navProfile} onClick={() => openModal('user')}>
        <Link to="#">
          {user?.first_name} {user?.last_name}
        </Link>
        <img src={'/avatars/menu_profile_holder.png'} alt="Profile" />
      </div>
    );
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
