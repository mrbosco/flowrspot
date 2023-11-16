import { useEffect } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import Button from '../../../components/Button/Button';
import FloatingLabelInput from '../../../components/Form/FloatingLabelInput';
import FormRow from '../../../components/Form/FormRow';

import useLoginUser from './useLoginUser';
import useModalStore from '../../../stores/useModalStore';
import { LoginPayload } from '../../../types';

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
  const { login, isLoggingIn, isLoggedIn } = useLoginUser();
  const { openModal } = useModalStore();

  const { register, handleSubmit, formState } = useForm<LoginPayload>({
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data: LoginPayload) => {
    login(data);
  };

  useEffect(() => {
    isLoggedIn && openModal('loginSuccess');
  }, [isLoggedIn, openModal]);

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Welcome Back</FormTitle>
        <FormRow>
          <FloatingLabelInput
            id="email"
            label="Email Address"
            type="text"
            {...register('email', {
              required: 'Email is required',
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: 'Entered value does not match email format',
              },
            })}
            disabled={isLoggingIn}
            error={errors?.email?.message}
          />
        </FormRow>
        <FormRow>
          <FloatingLabelInput
            id="password"
            label="Password"
            type="password"
            {...register('password', {
              required: 'Password is required',
              minLength: {
                value: 8,
                message: "Password can't be less than 8 characters",
              },
            })}
            disabled={isLoggingIn}
            error={errors?.password?.message}
          />
        </FormRow>
        <FormRow>
          <Button size="big" disabled={isLoggingIn}>
            Login to your Account
          </Button>
        </FormRow>
      </FormContainer>
    </>
  );
};

export default LoginForm;
