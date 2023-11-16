import { render } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import LoginModal from '../modals/auth/LoginModal';

jest.mock('../stores/useModalStore', () => ({
  __esModule: true,
  default: jest.fn(() => ({
    modals: { login: true },
    openModal: jest.fn(),
    closeModal: jest.fn(),
  })),
}));

describe('LoginModal', () => {
  it('renders correctly and matches snapshot', () => {
    const queryClient = new QueryClient();

    const { asFragment } = render(
      <QueryClientProvider client={queryClient}>
        <LoginModal />
      </QueryClientProvider>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
