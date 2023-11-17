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

export interface UserSightingsPayload {
  id: number;
}
