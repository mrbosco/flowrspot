import React, { forwardRef } from 'react';
import styles from './FloatingLabelInput.module.scss';
import styled from 'styled-components';

const Error = styled.span`
  color: #df9186;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.6rem;
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
