import { Flower, Pagination, User, Sighting } from '..';

export interface AuthResponse {
  auth_token: string;
  error?: string;
}

export interface CustomizedAuthResponse extends AuthResponse {
  email: string;
}

export interface FlowerListResponse {
  flowers: Flower[];
  meta?: Pagination;
  error?: string;
}

export interface AuthInfoResponse {
  user: User;
  error?: string;
}

export interface UserSightingsResponse {
  sightings: Sighting[];
  meta?: Pagination;
  error?: string;
}
