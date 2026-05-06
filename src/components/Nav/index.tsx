import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className=" w-full flex justify-center py-4 bg-indigo-900 text-white">
        <div className=" container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            Blog Pessoal
          </Link>{" "}
          <div className=" flex gap-4">
            Postagens Temas Cadastrar Perfil Sair
          </div>
        </div>
      </div>
    </>
  );
}
export default NavBar;
