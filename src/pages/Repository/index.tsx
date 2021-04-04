// Bibliotecas
import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { useRouteMatch, Link } from "react-router-dom";

// Componentes
import logoImg from "../../assets/logo.svg";
import api from "../../services/api";

// Estilização
import * as Styled from "./styles";

interface RepositoryParams {
  repository: string;
}

interface RepositoryInfo {
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
  owner: {
    login: string;
    avatar_url: string;
  };
}

interface Issue {
  id: string;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  const [repositoryInfo, setRepositoryInfo] = useState<RepositoryInfo | null>(
    null
  );
  const [issues, setIssues] = useState<Issue[]>([]);

  useEffect(() => {
    async function loadData(): Promise<void> {
      const [repositoryInfo, issues] = await Promise.all([
        api.get(`repos/${params.repository}`),
        api.get(`repos/${params.repository}/issues`),
      ]);

      setRepositoryInfo(repositoryInfo.data);
      setIssues(issues.data);
    }

    loadData();
  }, [params.repository]);

  return (
    <>
      <Styled.Header>
        <img src={logoImg} alt="GitHub Explorer" />

        <Link to="/">
          <FiChevronLeft size={16} /> Voltar
        </Link>
      </Styled.Header>

      {repositoryInfo && (
        <>
          <Styled.RepositoryInfo>
            <header>
              <img
                src={repositoryInfo.owner.avatar_url}
                alt={repositoryInfo.owner.login}
              />
              <div>
                <strong>{repositoryInfo.full_name}</strong>

                <p>{repositoryInfo.description}</p>
              </div>
            </header>

            <ul>
              <li>
                <strong>{repositoryInfo.stargazers_count}</strong>
                <span>Stars</span>
              </li>
              <li>
                <strong>{repositoryInfo.forks_count}</strong>
                <span>Forks</span>
              </li>
              <li>
                <strong>{repositoryInfo.open_issues_count}</strong>
                <span>Issues abertas</span>
              </li>
            </ul>
          </Styled.RepositoryInfo>

          <Styled.Issues>
            {issues.map((issue) => (
              <a key={issue.id} href={issue.html_url}>
                <div>
                  <strong>{issue.title}</strong>
                  <p>{issue.user.login}</p>
                </div>

                <FiChevronRight size={20} />
              </a>
            ))}
          </Styled.Issues>
        </>
      )}
    </>
  );
};

export default Repository;
