import styled from 'styled-components';
import { COLORS } from '../../common';

export const CardInput = styled.div`
  margin: 10px 0;
  background-color: ${COLORS.secondary};
  input {
    padding-left: 14px;
    height: 42px;
  }
  label {
    font-size: 12px;
  }

  .MuiInputLabel-root {
    color: ${COLORS.primary};
    position: relative;
    top: 10px;
    left: 15px;
    margin: 0;
  }

  .MuiButtonBase-root {
    position: relative;
    z-index: 5;
    bottom: 10px;
  }
`;
