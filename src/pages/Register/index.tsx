import { useForm } from 'react-hook-form';
import { ButtonUi } from '../../components/Button';
import Input from '../../components/Input/input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';
import api from '../../sevices/index';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
  name: yup.string().required(),
});

const Register = () => {
  const navigation = useNavigate();

  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/authaccount/registration', data);
      if (response.data.code === 1) {
        throw new Error(response.data.message);
      }
      alert('Usuário cadastrado com sucesso');
      navigation('/');
    } catch (error) {
      alert(error);
    }
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
        <Input
          name="email"
          control={control}
          id="usuario"
          label="Email"
          messageError="E-mail é obrigatório"
        />
        <InputPassword
          name="password"
          control={control}
          messageError="Password é obrigatório"
        />
        <Input
          name="name"
          control={control}
          id="name"
          label="Nome"
          messageError="Nome é obrigatório"
        />
        <ButtonUi children="Registrar" onClick={() => {}} />
      </form>
    </Container>
  );
};

export default Register;
