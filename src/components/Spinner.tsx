import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled.div.attrs<{ 'data-testid': string }>({
  'data-testid': 'spinner',
})`
  margin: 4.8rem auto;
  width: 6.4rem;
  aspect-ratio: 1;
  border-radius: 50%;
  background:
    radial-gradient(
        farthest-side,
        ${(props) => props.theme.colorPrimary} 94%,
        ${(props) => props.theme.colorBlack100}
      )
      top/10px 10px no-repeat,
    conic-gradient(
      ${(props) => props.theme.colorBlack100} 30%,
      ${(props) => props.theme.colorPrimary}
    );
  animation: ${rotate} 1.5s infinite linear;
`;

export default Spinner;
