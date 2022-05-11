import { Input, InputLabel } from '@mui/material';
import { Control, Controller, useController } from 'react-hook-form';
import { CardInput } from './style';

interface InputProps {
  name: string;
  control: Control<any>;
  label: string;
  id: string;
}
const Inputs = ({ label, id, name, control }: InputProps) => {
  return (
    <>
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <CardInput>
              <InputLabel htmlFor={id}>{label}</InputLabel>
              <Input
                fullWidth
                id={id}
                type="text"
                value={value}
                onChange={onChange}
              />
              {error && <p>{error.message}</p>}
            </CardInput>
          )}
        />
      ) : (
        <CardInput>
          <InputLabel htmlFor={id}>{label}</InputLabel>
          <Input fullWidth id={id} type="text" />
        </CardInput>
      )}
    </>
  );
};

export default Inputs;
