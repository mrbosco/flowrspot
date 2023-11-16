import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';

import FlowerList from '../features/FlowerList/FlowerList';

jest.mock('@tanstack/react-query', () => ({
  ...jest.requireActual('@tanstack/react-query'),
  useQuery: jest.fn(),
}));

const mockFlowers = [
  {
    id: 1,
    name: 'Rose',
    latin_name: 'Rosa',
    sightings: 5,
    favorite: false,
    profile_picture: './avatars/profile-holder.png',
  },
];

const queryClient = new QueryClient();

const Wrapper: React.FC<{ children?: React.ReactNode }> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);

describe('FlowerList', () => {
  it('renders the loading spinner when loading', () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    });

    render(<FlowerList />, { wrapper: Wrapper });
    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });

  it('renders flowers correctly', async () => {
    (useQuery as jest.Mock).mockReturnValue({
      data: mockFlowers,
      isLoading: false,
      error: null,
    });

    render(<FlowerList />, { wrapper: Wrapper });

    await waitFor(() => {
      expect(screen.getByText(mockFlowers[0].name)).toBeInTheDocument();
    });
  });
});
