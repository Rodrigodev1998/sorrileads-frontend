import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Home } from "../pages/Home";

//classe para definir as rotas do projeto 
// caso tenha que ter mais telas , deve adicionar ela aqui
export function AppRoutes() {
    return (
      <BrowserRouter>
        <Routes>
          {/* Tag para definir rota , o path é o caminho e o element é a class/componente desenvolvido */}
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    );
  }
  