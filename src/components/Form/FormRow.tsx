import styled from 'styled-components';

const StyledFormRow = styled.div`
  align-items: flex-start;
  display: flex;
  gap: ${(props) => props.theme.spacingXxs};
  width: 100%;

  &:has(button) {
    margin-top: calc(
      ${(props) => props.theme.spacingDefault} -
        ${(props) => props.theme.spacingXxs}
    );
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
