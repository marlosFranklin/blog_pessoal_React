import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import { AuthProvider } from "./contexts/AuthContext";

import ListaPostagens from "./components/Postagem/ListaPostagens";
import { ListaTemas } from "./components/Tema/ListaTemas";
import FormTema from "./components/Tema/FormTema";
import DeletarTema from "./components/Tema/DeletarTema";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className=" min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/temas" element={<ListaTemas />} />
              <Route path="/cadastrartema" element={<FormTema />} />
              <Route path="/editartema/:id" element={<FormTema />} />
              <Route path="/deletartema/:id" element={<DeletarTema />} />
              <Route path="/postagens" element={<ListaPostagens />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
