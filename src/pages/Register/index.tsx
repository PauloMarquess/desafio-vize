import { ButtonUi } from '../../components/Button';
import Input from '../../components/Input/input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';

const Register = () => {
  return (
    <Container>
      <form>
        <Input id="Usuário" label="Usuário" />
        <InputPassword />
        <Input id="Nome" label="Nome" />
        <ButtonUi children="Registrar" onClick={() => {}} />
      </form>
    </Container>
  );
};

export default Register;
