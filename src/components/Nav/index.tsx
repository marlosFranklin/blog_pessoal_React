import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const navigate = useNavigate();

  const { usuario, handleLogout } = useContext(AuthContext);

  function logout() {
    handleLogout();
    alert("O Usuário foi desconectado com sucesso!");
    navigate("/");
  }

  return (
    <>
      <div
        className="w-full flex justify-center py-4
                           bg-gray-900 text-white"
      >
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold text-white">
            Blog Pessoal
          </Link>
          {/*  <p> Bem vindo {usuario.senha}</p> */}

          <div className="flex gap-4">
            <Link to="/postagens" className="hover:underline text-white">
              Postagens
            </Link>
            <Link to="/temas" className=" hover:underline  text-white">
              Temas
            </Link>
            <Link to="/cadastrartema" className="hover:underline  text-white">
              Cadastrar tema
            </Link>
            Perfil
            <Link
              to=""
              onClick={logout}
              className="hover:underline  text-white"
            >
              Sair
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
