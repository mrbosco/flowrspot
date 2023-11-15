/// <reference types="vite-plugin-svgr/client" />
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import Logo from '../../assets/logo.svg?react';
import HamburgerIcon from '../../assets/hamburger.svg';
import CloseIcon from '../../assets/close-icon.svg';

import AuthLinks from './AuthLinks';
import useToggle from '../../hooks/useToggle';

import styles from './Navigation.module.scss';

const Navigation = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  return (
    <>
      <nav className={styles.navigation}>
        <Link className="logo" to="/">
          <Logo />
        </Link>
        <div
          className={classNames(styles.navLinks, {
            [styles.opened]: isMenuOpen,
          })}
        >
          <Link to="/flowers">Flowers</Link>
          <Link to="#">Latest Sightings</Link>
          <Link to="#">Favorites</Link>
          <AuthLinks />
        </div>
        <img
          src={isMenuOpen ? CloseIcon : HamburgerIcon}
          className={styles.hamburgerIcon}
          onClick={toggleMenu}
        />
      </nav>
    </>
  );
};

export default Navigation;
