import { FormEvent, useState } from 'react';
import { ButtonUi } from '../../components/Button';
import Input from '../../components/Input/input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';

const Register = () => {
  const [formValue, setFormValue] = useState({});
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('pegou');
  };
  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Input id="Usuário" label="Usuário" />
        <InputPassword />
        <Input id="Nome" label="Nome" />
        <ButtonUi children="Registrar" onClick={() => {}} />
      </form>
    </Container>
  );
};

export default Register;
