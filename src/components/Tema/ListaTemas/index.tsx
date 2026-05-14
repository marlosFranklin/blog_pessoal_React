import { useNavigate } from "react-router-dom";

import { useContext, useEffect, useState } from "react";

import type Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContext";
import { buscar } from "../../../services/service";
import { CardTema } from "..";

export function ListaTemas() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temas, setTemas] = useState<Tema[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (!token) {
      alert("você precisa estar logado!");
      navigate("/");
    }
  }, [token, navigate]);

  useEffect(() => {
    buscarTemas();
  }, [token]);

  async function buscarTemas() {
    try {
      setIsLoading(true);
      await buscar("/temas", setTemas, { headers: { Authorization: token } });
    } catch (error: any) {
      if (error.toString().includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <>
      <div className=" flex justify-center w-full my-4  ">
        <div className=" container flex flex-col">
          {!isLoading && temas.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhum Tema foi encontrado!
            </span>
          )}
          <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {temas.map((tema) => (
              <CardTema key={tema.id} tema={tema} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
