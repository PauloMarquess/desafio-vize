import { useEffect, useState } from 'react';
import { UserMocks } from '../../__mocks__';
import { Card, ContainerUsers, Table } from './styles';

export const Users = () => {
  const [user, setUser] = useState(false);
  useEffect(() => {
    const object = JSON.parse(localStorage.getItem('user'));

    {
      object.Token ? (
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
      ) : (
        ''
      );
    }
  }, []);
};
