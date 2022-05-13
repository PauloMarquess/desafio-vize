import { useEffect, useState } from 'react';
import api from '../../sevices';
import { UserMocks } from '../../__mocks__';
import { Card, ContainerUsers, Table } from './styles';

export const Users = () => {
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    setLoading(true);
    const token = JSON.parse(localStorage.getItem('user'));

    const getUsersList = async () => {
      const config = {
        headers: { Authorization: `Bearer ${token.Token}` },
      };

      api.get('/users?page=1', config).then(({ data }) => {
        setUsers(data.data);
      });
    };

    getUsersList();
    setLoading(false);
  }, []);

  console.log(users);

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
