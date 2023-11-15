import { AuthResponse, SignupPayload } from '../types';

export const createUser = async (
  newUser: SignupPayload
): Promise<AuthResponse> => {
  try {
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

    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data: AuthResponse = (await response.json()).auth_token;

    return data;
  } catch (error) {
    return {
      auth_token: '',
      error: `${error}`,
    };
  }
};
