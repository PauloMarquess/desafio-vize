import { useNavigate } from 'react-router-dom';
import { ButtonUi } from '../../components/Button';
import Input from '../../components/Input/input';
import { InputPassword } from '../../components/Input/password';
import { Container } from '../../styles/global';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import api from '../../sevices/index';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const SignIn = () => {
  const navigation = useNavigate();
  const onSubmit = async (data: any) => {
    try {
      const response = await api.post('/authaccount/login', data);
      console.log(response);
      if (response.data.message !== 'success') {
        throw new Error(response.data.message);
      }
      await localStorage.setItem('user', JSON.stringify(response.data.data));
      navigation('/users');
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
    <Container responsive>
      <form
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit, onSubmitValidationError)}
      >
        <Input
          name="email"
          control={control}
          id="usuario-login"
          label="Email"
        />
        <InputPassword name="password" control={control} />
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
