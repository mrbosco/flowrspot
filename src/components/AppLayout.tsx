import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Navigation from './Navigation/Navigation';

const StyledAppLayout = styled.div``;

const Main = styled.main`
  max-width: 1220px;
  margin: 0 auto;
  padding: 1.5rem;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: 1.5rem;
`;

const AppLayout: React.FC = () => {
  return (
    <StyledAppLayout>
      <Navigation />
      <Main>
        <Container>
          <Outlet />
        </Container>
      </Main>
    </StyledAppLayout>
  );
};

export default AppLayout;
