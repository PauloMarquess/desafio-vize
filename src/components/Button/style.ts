import styled from 'styled-components';

interface StyleProps {
  width?: string | boolean;
}

export const ContainerButton = styled.div<StyleProps>`
  width: ${({ width }) => (width ? '315px' : '260px')};
  margin: auto;

  Button {
    border-radius: 100px;
    text-transform: capitalize;
    height: 40px;
  }
`;
