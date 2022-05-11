import { useNavigate } from 'react-router-dom';
import { ButtonUi } from '../../components/Button';
import Input from '../../components/Input/input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const schema = yup.object().shape({
  userLogin: yup.string().required(),
  passwordLogin: yup.string().required(),
});

const SignIn = () => {
  const navigation = useNavigate();
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
        <Input
          name="userLogin"
          control={control}
          id="usuario-login"
          label="Usuário"
        />
        <InputPassword name="passwordLogin" control={control} />
        <ButtonUi width children="Login" onClick={() => {}} />
      </form>
      <ButtonUi
        children="Registrar"
        onClick={() => {
          navigation('/register');
        }}
      />
    </Container>
  );
};

export default SignIn;
