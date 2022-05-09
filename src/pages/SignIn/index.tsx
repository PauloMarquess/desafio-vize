import Input from '../../components/Input';
import { Container } from '../../styles/global';
import { SigninMock } from '../../__mocks__';

const SignIn = () => {
  return (
    <Container>
      <form>
        {SigninMock.map((item) => (
          <Input type={item.type} label={item.nameInput} />
        ))}
      </form>
    </Container>
  );
};

export default SignIn;
