import Button from '../../../components/Button/Button';
import FloatingLabelInput from '../../../components/Form/FloatingLabelInput';
import FormRow from '../../../components/Form/FormRow';

import styled from 'styled-components';
import useCreateUser from './useCreateUser';
import { useForm } from 'react-hook-form';
import { SignupPayload } from '../../../types';
import { useEffect } from 'react';
import useModalStore from '../../../stores/useModalStore';

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

const SignUpForm = () => {
  const { signupUser, isCreating, isCreated } = useCreateUser();
  const { openModal } = useModalStore();

  const { register, handleSubmit, formState } = useForm<SignupPayload>({
    defaultValues: {},
  });
  const { errors } = formState;

  const onSubmit = (data: SignupPayload) => {
    signupUser(data);
  };

  useEffect(() => {
    isCreated && openModal('signupSuccess');
  }, [isCreated, openModal]);

  return (
    <>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormTitle>Create an Account</FormTitle>
        <FormRow>
          <FloatingLabelInput
            id="first_name"
            label="First Name"
            type="text"
            {...register('first_name', {
              required: 'First name is required',
            })}
            error={errors?.first_name?.message}
          />
          <FloatingLabelInput
            id="last_name"
            label="Last Name"
            type="text"
            {...register('last_name', {
              required: 'Last name is required',
            })}
            error={errors?.last_name?.message}
          />
        </FormRow>
        <FormRow>
          <FloatingLabelInput
            id="date_of_birth"
            label="Date of Birth"
            type="text"
            {...register('date_of_birth', {
              required: 'Date of birth is required',
            })}
            error={errors?.date_of_birth?.message}
          />
        </FormRow>
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
            error={errors?.password?.message}
          />
        </FormRow>
        <FormRow>
          <Button size="big" disabled={isCreating}>
            Create Account
          </Button>
        </FormRow>
      </FormContainer>
    </>
  );
};

export default SignUpForm;
