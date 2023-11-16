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

export interface Pagination {
  current_page: number;
  next_page: number;
  prev_page: number;
  total_pages: number;
}
