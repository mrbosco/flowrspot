import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div.attrs<{ 'data-testid': string }>({
  'data-testid': 'spinner',
})`
  ${({ theme }) => {
    const { colorPrimaryFaded, spacingL, spacingXl } = theme;
    return css`
      margin: ${spacingL} auto;
      width: ${spacingXl};
      aspect-ratio: 1;
      border-radius: 100%;
      background:
        radial-gradient(farthest-side, ${colorPrimaryFaded} 94%, #0000) top/10px
          10px no-repeat,
        conic-gradient(#0000 30%, ${colorPrimaryFaded});
      animation: ${rotate} 1.5s infinite linear;
    `;
  }}
`;

export default Spinner;
