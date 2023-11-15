import styled from 'styled-components';

const StyledFormRow = styled.div`
  align-items: flex-start;
  display: flex;
  gap: 0.63rem;
  width: 100%;

  &:has(button) {
    margin-top: calc(1.25rem - 0.63rem);
  }
`;

interface FormRowProps {
  label?: string;
  error?: string;
  children: React.ReactNode;
}

const FormRow = ({ children }: FormRowProps) => {
  return <StyledFormRow>{children}</StyledFormRow>;
};
export default FormRow;
