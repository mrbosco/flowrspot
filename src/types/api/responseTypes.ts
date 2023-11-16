import { Flower, Pagination } from '..';

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
}
