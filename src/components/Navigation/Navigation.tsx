/// <reference types="vite-plugin-svgr/client" />
import { useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import useModalStore from '../../stores/useModalStore';

import Logo from '../../assets/logo.svg?react';
import HamburgerIcon from '../../assets/hamburger.svg';
import CloseIcon from '../../assets/close-icon.svg';
import Button from '../Button/Button';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openModal } = useModalStore();

  return (
    <>
      <nav className={styles.navigation}>
        <div className="logo">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <div
          className={classNames(styles.navLinks, isMenuOpen && styles.opened)}
        >
          <Link to="/flowers">Flowers</Link>
          <Link to="#">Latest Sightings</Link>
          <Link to="#">Favorites</Link>
          {isLoggedIn ? (
            <div className={styles.navProfile}>
              <Link to="#">John Doe</Link>
              <img src={'/avatars/menu_profile_holder.png'} />
            </div>
          ) : (
            <>
              <span onClick={() => openModal('login')}>Login</span>
              <Button rounded={true} onClick={() => openModal('signup')}>
                New Account
              </Button>
            </>
          )}
        </div>
        <img
          src={isMenuOpen ? CloseIcon : HamburgerIcon}
          className={styles.hamburgerIcon}
          onClick={() => setIsMenuOpen((state) => !state)}
        />
      </nav>
    </>
  );
};

export default Navigation;
