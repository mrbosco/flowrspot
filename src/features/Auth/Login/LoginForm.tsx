import Button from '../../../components/Button/Button';
import FloatingLabelInput from '../../../components/Form/FloatingLabelInput';
import FormRow from '../../../components/Form/FormRow';

import styled from 'styled-components';

const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.63rem;
`;

const FormTitle = styled.h3`
  color: #334144;
  text-align: center;
  margin-bottom: 0.88rem;
`;

const LoginForm = () => {
  return (
    <>
      <FormContainer>
        <FormTitle>Welcome Back</FormTitle>
        <FormRow>
          <FloatingLabelInput id="email" label="Email Address" type="email" />
        </FormRow>
        <FormRow>
          <FloatingLabelInput id="password" label="Password" type="password" />
        </FormRow>
        <FormRow>
          <Button size="big">Login to your Account</Button>
        </FormRow>
      </FormContainer>
    </>
  );
};

export default LoginForm;
