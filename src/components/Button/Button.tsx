import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
  size?: 'big' | 'regular' | 'small';
  rounded?: boolean;
  hovered?: boolean;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  size = 'regular',
  rounded = false,
  onClick,
  className = '',
}) => {
  const buttonClasses = classNames(
    styles.button,
    styles[size],
    {
      [styles.rounded]: rounded,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
