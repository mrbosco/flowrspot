import React from 'react';
import { Link } from 'react-router-dom';

import useModalStore from '../../stores/useModalStore';
import Button from '../Button/Button';

import styles from './Navigation.module.scss';
import { useAuthStore } from '../../stores/useAuthStore';
import useUserInfo from '../../features/User/useUserInfo';

const AuthLinks: React.FC = () => {
  const { openModal } = useModalStore();
  const { isLoggedIn } = useAuthStore();
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
