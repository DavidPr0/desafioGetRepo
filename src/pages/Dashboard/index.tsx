import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

import { repositoriesRequest } from "../../store/modules/repositories/actions";
import RepositoryList from '../../components/RepositoryList';
import { ApplicationState } from '../../store';

import logoImg from '../../assets/svg/logo.svg';
import { Title, Form } from './styled';
import { Container, Button } from '@material-ui/core';

const Dashboard = () => {
  const dispatch = useDispatch();
  const [newRepo, setNewRepo] = useState('');

  const searchRepository = () => {
    dispatch(repositoriesRequest(newRepo));
  }

  const repositories = useSelector((state: ApplicationState) => state.repositories.data);
  const loading = useSelector((state: ApplicationState) => state.repositories.loading);

  return (
    <Container>
      <img src={logoImg} alt="Github explorer" />
      <Title>
        Explore repositórios no GitHub
      </Title>
      <Form hasError={false}>
        <input
          placeholder="Digite o nome do repositório"
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
        />
        <Button variant="outlined" color="primary" onClick={() => searchRepository()}>Pesquisar</Button>
      </Form>
        <RepositoryList data={repositories} newRepo={newRepo} />
    </Container>
  );
}

export default Dashboard;
