import { TextField } from '@mui/material';
import { CardInput } from './style';

interface InputProps {
  label: string;
  type: string;
}

const Input = ({ label, type }: InputProps) => {
  return (
    <CardInput>
      <TextField
        type={type}
        label={label}
        defaultValue=" "
        variant="filled"
        color="primary"
        fullWidth
      />
    </CardInput>
  );
};

export default Input;
