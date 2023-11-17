import React from 'react';
import { Link } from 'react-router-dom';

import styles from './styles.module.scss';

import useModalStore from '../../stores/useModalStore';
import useUserInfo from '../../hooks/auth/useUserInfo';

const AuthNavPart: React.FC = () => {
  const { openModal } = useModalStore();
  const { user } = useUserInfo();

  return (
    <div className={styles.navProfile} onClick={() => openModal('user')}>
      <Link to="#">
        {user?.first_name} {user?.last_name}
      </Link>
      <img src={'/avatars/menu_profile_holder.png'} alt="Profile" />
    </div>
  );
};

export default AuthNavPart;
