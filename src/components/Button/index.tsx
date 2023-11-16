import React from 'react';
import classNames from 'classnames';
import { ButtonProps, ButtonSizes } from './types';

const Button: React.FC<ButtonProps> = ({
  children,
  size,
  rounded = false,
  disabled = false,
  onClick,
  className,
}) => {
  const buttonClasses = classNames(
    {
      large: size === ButtonSizes.LARGE,
      small: size === ButtonSizes.SMALL,
      rounded: rounded,
    },
    className
  );

  return (
    <button className={buttonClasses} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
