import { Visibility, VisibilityOff } from '@mui/icons-material';
import { IconButton, Input, InputAdornment, InputLabel } from '@mui/material';
import { useState } from 'react';
import { CardInput } from './style';

export const InputPassword = () => {
  const [password, setPassword] = useState<any>('');
  const [showPassword, setShowPassword] = useState<any>(false);
  return (
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
  );
};
