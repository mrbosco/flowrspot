import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Navigation from './Navigation';

const StyledAppLayout = styled.div``;

const Main = styled.main`
  max-width: ${(props) => props.theme.breakpointDesktop};
  margin: 0 auto;
  padding: ${(props) => props.theme.spacingDefault};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  gap: ${(props) => props.theme.spacingDefault};
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
