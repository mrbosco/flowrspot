import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import useUserInfo from '../hooks/auth/useUserInfo';
import AuthLinks from '../components/Navigation/AuthLinks';

jest.mock('../stores/useAuthStore', () => ({
  useIsLoggedIn: jest.fn(),
}));
jest.mock('../hooks/auth/useUserInfo', () => jest.fn());

const mockUseIsLoggedIn = jest.requireMock(
  '../stores/useAuthStore'
).useIsLoggedIn;
const mockUseUserInfo = useUserInfo as jest.Mock;

describe('AuthLinks', () => {
  it('renders login and signup options when user is not signed in', () => {
    mockUseIsLoggedIn.mockReturnValue(false);
    mockUseUserInfo.mockReturnValue({ user: null });

    const { queryByText } = render(
      <BrowserRouter>
        <AuthLinks />
      </BrowserRouter>
    );

    expect(queryByText('Login')).toBeInTheDocument();
    expect(queryByText('New Account')).toBeInTheDocument();
  });

  it('renders user profile link when user is signed in', () => {
    mockUseIsLoggedIn.mockReturnValue(true);
    mockUseUserInfo.mockReturnValue({
      user: { first_name: 'John', last_name: 'Doe' },
    });

    const { queryByText } = render(
      <BrowserRouter>
        <AuthLinks />
      </BrowserRouter>
    );

    expect(queryByText('John Doe')).toBeInTheDocument();
  });
});
