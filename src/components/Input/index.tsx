import { Input, InputLabel } from '@mui/material';
import { CardInput } from './style';

interface InputProps {
  label: string;
  id: string;
}
const Inputs = ({ label, id }: InputProps) => {
  return (
    <CardInput>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Input fullWidth id={id} type="text" />
    </CardInput>
  );
};

export default Inputs;
