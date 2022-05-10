import { useNavigate } from 'react-router-dom';
import { ButtonUi } from '../../components/Button';
import Input from '../../components/Input/input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';

const SignIn = () => {
  const navigation = useNavigate();
  return (
    <Container>
      <form>
        <Input id="Usuário" label="Usuário" />
        <InputPassword />
        <ButtonUi width children="Login" onClick={() => {}} />
        <ButtonUi
          children="Registrar"
          onClick={() => {
            navigation('/register');
          }}
        />
      </form>
    </Container>
  );
};

export default SignIn;
