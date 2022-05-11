import { useForm } from 'react-hook-form';
import { ButtonUi } from '../../components/Button';
import Input from '../../components/Input/input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';

import { yupResolver } from '@hookform/resolvers/yup';

import * as yup from 'yup';

const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),
  user: yup.string().required(),
});

const Register = () => {
  const onSubmit = (data: any) => {
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
        <Input name="user" control={control} id="usuario" label="Usuário" />
        <InputPassword name="password" control={control} />
        <Input name="name" control={control} id="Nome" label="Nome" />
        <ButtonUi children="Registrar" onClick={() => {}} />
      </form>
    </Container>
  );
};

export default Register;
