import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'big' | 'regular' | 'small';
  rounded?: boolean;
  onClick?: () => void; // Add other HTML button attributes as needed
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'regular',
  rounded = false,
  onClick,
}) => {
  const buttonClasses = classNames(styles.button, styles[size], {
    [styles.rounded]: rounded,
  });

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
