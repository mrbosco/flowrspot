export interface Flower {
  id: number;
  name: string;
  latin_name: string;
  sightings: number;
  profile_picture: string;
  favorite: boolean;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
}

export interface AuthResponse {
  auth_token: string;
  error?: string;
}

export interface SignupPayload {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth: string;
}

export interface LoginPayload {
  email: string;
  password: string;
}
