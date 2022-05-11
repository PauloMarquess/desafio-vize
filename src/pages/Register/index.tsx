import { useForm } from 'react-hook-form';
import { ButtonUi } from '../../components/Button';
import Input from '../../components/Input/input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';
import api from '../../sevices/index';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  user: yup.string().required(),
});

const Register = () => {
  const onSubmit = async (data: any) => {
    await api.post('/authaccount/registration', data);
    console.log(data);
  };

  const onSubmitValidationError = (errors: any) => {
    console.log(errors);
  };

  const { control, handleSubmit } = useForm({
    resolver: yupResolver(schema),
    mode: 'all',
  });

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit, onSubmitValidationError)}>
        <Input name="email" control={control} id="usuario" label="Usuário" />
        <InputPassword name="password" control={control} />
        <Input name="name" control={control} id="Nome" label="Nome" />
        <ButtonUi children="Registrar" onClick={() => {}} />
      </form>
    </Container>
  );
};

export default Register;
