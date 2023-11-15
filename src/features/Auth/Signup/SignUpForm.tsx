import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { format, parseISO } from 'date-fns';
import styled from 'styled-components';

import Button from '../../../components/Button/Button';
import FloatingLabelInput from '../../../components/Form/FloatingLabelInput';
import FormRow from '../../../components/Form/FormRow';

import { SignupPayload } from '../../../types';
import useCreateUser from './useCreateUser';
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
    signupUser({
      ...data,
      date_of_birth: format(parseISO(data.date_of_birth), 'MMMM d, yyyy'),
    });
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
            disabled={isCreating}
            error={errors?.first_name?.message}
          />
          <FloatingLabelInput
            id="last_name"
            label="Last Name"
            type="text"
            {...register('last_name', {
              required: 'Last name is required',
            })}
            disabled={isCreating}
            error={errors?.last_name?.message}
          />
        </FormRow>
        <FormRow>
          <FloatingLabelInput
            id="date_of_birth"
            label="Date of Birth"
            type="date"
            {...register('date_of_birth', {
              required: 'Date of birth is required',
            })}
            disabled={isCreating}
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
            disabled={isCreating}
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
            disabled={isCreating}
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
