import { useNavigate } from "react-router-dom";

import { useCallback, useContext, useEffect, useState } from "react";

import type Tema from "../../../models/Tema";
import { AuthContext } from "../../../contexts/AuthContextValue";
import { buscar } from "../../../services/service";
import { CardTema } from "..";
import { toast } from "react-toastify";

export function ListaTemas() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [temas, setTemas] = useState<Tema[]>([]);
  const { usuario, handleLogout } = useContext(AuthContext);
  const token = usuario.token;

  useEffect(() => {
    if (!token) {
      toast.warn("Você precisa estar logado!", {
        autoClose: 5000,
        position: "top-right",
      });
      navigate("/");
    }
  }, [token, navigate]);

  const buscarTemas = useCallback(async () => {
    await Promise.resolve();
    setIsLoading(true);

    try {
      await buscar("/temas", setTemas, { headers: { Authorization: token } });
    } catch (error: unknown) {
      if (String(error).includes("401")) {
        handleLogout();
      }
    } finally {
      setIsLoading(false);
    }
  }, [handleLogout, token]);

  useEffect(() => {
    if (!token) {
      return;
    }

    const timeoutId = window.setTimeout(() => {
      void buscarTemas();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [buscarTemas, token]);
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
