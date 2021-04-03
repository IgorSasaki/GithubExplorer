// Bibliotecas
import React from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRouteMatch, Link } from "react-router-dom";

// Componentes
import logoImg from "../../assets/logo.svg";

// Estilização
import * as Styled from "./styles";

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Styled.Header>
        <img src={logoImg} alt="GitHub Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Styled.Header>

      <Styled.RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="Rocketseat"
          />
          <div>
            <strong>Rocketseat/unform</strong>

            <p>Descrição do repositório</p>
          </div>
        </header>

        <ul>
          <li>
            <strong>1808</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </Styled.RepositoryInfo>

      <Styled.Issues>
        <Link to={`/repository/`}>
          <div>
            <strong>repository.full_name</strong>
            <p>repository.description</p>
          </div>

          <FiChevronRight size={20} />
        </Link>
      </Styled.Issues>
    </>
  );
};

export default Repository;
