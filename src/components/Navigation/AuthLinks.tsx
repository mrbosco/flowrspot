import React from 'react';
import { Link } from 'react-router-dom';

import useModalStore from '../../stores/useModalStore';
import Button from '../Button/Button';

import styles from './Navigation.module.scss';

const AuthLinks: React.FC = () => {
  const { openModal } = useModalStore();
  const isAuthenticated = false;

  if (isAuthenticated) {
    return (
      <div className={styles.navProfile}>
        <Link to="#">John Doe</Link>
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
