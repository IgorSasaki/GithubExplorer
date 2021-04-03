// Bibliotecas Externas
import React, { FormEvent, useState } from "react";
import { FiChevronRight } from "react-icons/fi";

// Componentes
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

// Estilização
import * as Styled from "./styles";

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Dashboard: React.FC = () => {
  const [repositories, setRepositories] = useState<Repository[]>([]);
  const [newRepo, setNewRepo] = useState("");

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get(`/repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('')
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Styled.Title>Explore repositórios no Github</Styled.Title>;
      <Styled.Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={(e) => setNewRepo(e.target.value)}
          placeholder="Digite o nome do reporisory"
        />

        <button type="submit">Pesquisa</button>
      </Styled.Form>
      <Styled.Repositories>
        {repositories.map(repository => (
          <a href="teste" key={repository.full_name}>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description}</p>
            </div>

            <FiChevronRight size={20} />
          </a>
        ))}
      </Styled.Repositories>
    </>
  );
};

export default Dashboard;
