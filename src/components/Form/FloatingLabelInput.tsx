import React, { forwardRef } from 'react';
import styled from 'styled-components';
import styles from './FloatingLabelInput.module.scss';

const Error = styled.span`
  color: ${(props) => props.theme.colorPrimaryFaded};
  text-transform: uppercase;
  font-size: ${(props) => props.theme.labelSize};
`;

interface FloatingLabelInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const FloatingLabelInput = forwardRef<
  HTMLInputElement,
  FloatingLabelInputProps
>(({ label, error, ...props }, ref) => {
  return (
    <div className={styles.floatingLabelContainer}>
      <input ref={ref} placeholder="" {...props} />
      <label htmlFor={props.id}>{label}</label>
      {error && <Error>{error}</Error>}
    </div>
  );
});

FloatingLabelInput.displayName = 'FloatingLabelInput';

export default FloatingLabelInput;
