import styled from 'styled-components';
import { COLORS } from '../../common';

export const CardInput = styled.div`
  margin: 10px 0;
  background-color: ${COLORS.secondary};
  input {
    padding-left: 12px;
  }

  .MuiInputLabel-root {
    color: ${COLORS.primary};
    position: relative;
    top: 10px;
    margin: 0;
  }

  .MuiButtonBase-root {
    position: relative;
    z-index: 5;
    bottom: 18px;
  }
`;
