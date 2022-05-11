import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { CardInput } from './style';

type Props = {
  control?: Control<any>;
  name: string;
};

export const InputPassword = ({ name, control }: Props) => {
  const [password, setPassword] = useState<any>('');
  const [showPassword, setShowPassword] = useState<any>(false);
  return (
    <>
      {control ? (
        <Controller
          name={name}
          control={control}
          render={({ field: { value, onChange }, fieldState: { error } }) => (
            <CardInput>
              <InputLabel htmlFor="id-password">Password</InputLabel>
              <Input
                fullWidth
                id="id-password"
                type={showPassword ? 'text' : 'password'}
                value={value}
                onChange={onChange}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
              {error && <p>{error.message}</p>}
            </CardInput>
          )}
        />
      ) : (
        <CardInput>
          <InputLabel htmlFor="id-password">Password</InputLabel>
          <Input
            fullWidth
            id="id-password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </CardInput>
      )}
    </>
  );
};
