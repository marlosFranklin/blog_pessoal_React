import { useCallback, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SyncLoader } from "react-spinners";
import { AuthContext } from "../../../contexts/AuthContextValue";
import type Postagem from "../../../models/Postagem";
import { buscar } from "../../../services/service";
import CardPostagem from "../CardPostagem";
import { toast } from "react-toastify";

function ListaPostagens() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [postagens, setPostagens] = useState<Postagem[]>([]);

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
  }, [navigate, token]);

  const buscarPostagens = useCallback(async () => {
    await Promise.resolve();
    setIsLoading(true);

    try {
      await buscar("/postagens", setPostagens, {
        headers: { Authorization: token },
      });
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
      void buscarPostagens();
    }, 0);

    return () => window.clearTimeout(timeoutId);
  }, [buscarPostagens, token]);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full my-4 ">
        <div className="container flex flex-col">
          {!isLoading && postagens.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma Postagem foi encontrada!
            </span>
          )}

          <div
            className="grid grid-cols-1 md:grid-cols-2 
                                    lg:grid-cols-3 gap-8"
          >
            {postagens.map((postagem) => (
              <CardPostagem key={postagem.id} postagem={postagem} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaPostagens;
