import { ReactNode } from 'react';
import { ContainerButton } from './style';
import { Button } from '@mui/material';

interface ButtonProps {
  children: ReactNode;
  onClick: () => void;
  width?: string | boolean;
}

export const ButtonUi = ({ onClick, children, width }: ButtonProps) => {
  return (
    <ContainerButton width={width}>
      <Button type="submit" variant="contained" onClick={onClick} fullWidth>
        {children}
      </Button>
    </ContainerButton>
  );
};
