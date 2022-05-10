import { UserMocks } from '../../__mocks__';
import { Card, ContainerUsers, Table } from './styles';

export const Users = () => {
  return (
    <ContainerUsers>
      <h1>Usuários:</h1>
      <Table>
        <Card width>
          <h5>ID</h5>
          {UserMocks.map((id) => (
            <p>{id.id}</p>
          ))}
        </Card>
        <Card text>
          <h5>Nome</h5>
          {UserMocks.map((id) => (
            <p>{id.user}</p>
          ))}
        </Card>
      </Table>
    </ContainerUsers>
  );
};
