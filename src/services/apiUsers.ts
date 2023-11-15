import { useAuthStore } from '../stores/useAuthStore';
import {
  AuthInfoPayload,
  AuthResponse,
  CustomizedAuthResponse,
  LoginPayload,
  SignupPayload,
} from '../types';

export const createUser = async (
  newUser: SignupPayload
): Promise<AuthResponse> => {
  const response = await fetch(
    'https://flowrspot-api.herokuapp.com/api/v1/users/register',
    {
      method: 'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data: AuthResponse = await response.json();

  if (data?.error) {
    throw new Error(data?.error);
  }

  return data;
};

export const loginUser = async (
  user: LoginPayload
): Promise<CustomizedAuthResponse> => {
  const response = await fetch(
    'https://flowrspot-api.herokuapp.com/api/v1/users/login',
    {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    }
  );

  const data: CustomizedAuthResponse = await response.json();

  if (data?.error) {
    throw new Error(data?.error);
  }

  return { ...data, email: user.email };
};

export const refreshToken = async (): Promise<void> => {
  const oldToken = useAuthStore.getState().token;
  const response = await fetch(
    'https://flowrspot-api.herokuapp.com/api/v1/users/register',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${oldToken}`,
      },
    }
  );

  const data: AuthResponse = await response.json();
  useAuthStore.getState().refreshToken(data.auth_token);

  if (data?.error) {
    throw new Error(data?.error);
  }
};

export const getAuthenticatedUser = async (): Promise<AuthInfoPayload> => {
  const response = await fetch(
    'https://flowrspot-api.herokuapp.com/api/v1/users/me',
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: useAuthStore.getState().token ?? '',
      },
    }
  );

  const data: AuthInfoPayload = await response.json();

  if (data?.error) {
    throw new Error(data?.error);
  }

  return data;
};
