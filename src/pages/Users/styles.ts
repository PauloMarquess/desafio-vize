import styled from 'styled-components';
import { COLORS } from '../../common';

interface CardProps {
  width?: boolean;
  text?: boolean;
}

export const ContainerUsers = styled.div`
  width: 85%;
  margin: auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 8%;

  h1 {
    margin-bottom: 40px;
    font-weight: 400;
  }
`;
export const Table = styled.div`
  display: flex;
  gap: 4px;

  h5 {
    background-color: ${COLORS.third};
  }

  h5,
  p {
    height: 40px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: ${COLORS.primary};
    margin: 0;
    padding-left: 12px;
  }
  p {
    margin: 10px 0;
  }
`;

export const Card = styled.div<CardProps>`
  width: ${({ width }) => (width ? '18%' : '82%')};
  border: 1px solid ${COLORS.third};
  display: flex;
  flex-direction: column;
  text-align: ${({ text }) => (text ? 'start' : 'center')};
  border: 1px solid ${COLORS.third};
  margin-bottom: 30px;
`;
