// Bibliotecas Externas
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Componentes
import Routes from "./routes";

// Estilização
import GlobalStyle from "./styles/global";

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyle />
  </>
);

export default App;
