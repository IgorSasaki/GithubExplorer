// Bibliotecas Externas
import React from "react";
import { FiChevronRight } from "react-icons/fi";

// Componentes
import logoImg from "../../assets/logo.svg";

// Estilização
import * as Styled from "./styles";

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Styled.Title>Explore repositórios no Github</Styled.Title>;
      <Styled.Form>
        <input placeholder="Digite o nome do reporisory" />

        <button type="submit">Pesquisa</button>
      </Styled.Form>
      <Styled.Repositories>
        <a href="teste">
          <img src="https://github.com/IgorSasaki.png" alt="Igor Sasaki" />
          <div>
            <strong>IgorSasaki/BeTheHero</strong>
            <p>Desenvolvido utilizando ReactJS, NodeJS e React Native</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/IgorSasaki.png" alt="Igor Sasaki" />
          <div>
            <strong>IgorSasaki/BeTheHero</strong>
            <p>Desenvolvido utilizando ReactJS, NodeJS e React Native</p>
          </div>
          
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img src="https://github.com/IgorSasaki.png" alt="Igor Sasaki" />
          <div>
            <strong>IgorSasaki/BeTheHero</strong>
            <p>Desenvolvido utilizando ReactJS, NodeJS e React Native</p>
          </div>
          
          <FiChevronRight size={20} />
        </a>
      </Styled.Repositories>
    </>
  );
};

export default Dashboard;
