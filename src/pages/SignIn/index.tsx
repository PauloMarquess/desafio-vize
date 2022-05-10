import { FormControl } from '@mui/material';
import Input from '../../components/Input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';

const SignIn = () => {
  return (
    <Container>
      <FormControl fullWidth>
        <Input id="Usuário" label="Usuário" />
        <InputPassword />
      </FormControl>
    </Container>
  );
};

export default SignIn;
