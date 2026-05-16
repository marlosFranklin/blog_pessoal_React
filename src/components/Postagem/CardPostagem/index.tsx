import { Link } from "react-router-dom";
import type Postagem from "../../../models/Postagem";

interface CardPostagensProps {
  postagem: Postagem;
}

function CardPostagem({ postagem }: CardPostagensProps) {
  return (
    <div
      className="border-slate-900 
            flex flex-col rounded overflow-hidden justify-between"
    >
      <div className="  bg-gray-900">
        <div className="flex w-full  bg-gray-900 py-2 px-4 items-center gap-4 text-white">
          <img
            src={postagem.usuario?.foto}
            className="h-12 rounded-full"
            alt={postagem.usuario?.nome}
          />
          <h3 className="text-lg font-bold text-center uppercase">
            {postagem.usuario?.nome}
          </h3>
        </div>
        <div className="p-4 ">
          <h4 className="text-lg font-semibold uppercase">{postagem.title}</h4>
          <p className="text-white">{postagem.texto}</p>
          <p className=" text-white">Tema: {postagem.tema?.descricao}</p>
          <p className="text-white">
            Data:{" "}
            {new Intl.DateTimeFormat("pt-BR", {
              dateStyle: "full",
              timeStyle: "medium",
            }).format(new Date(postagem.data))}
          </p>
        </div>
      </div>
      <div className="flex">
        <Link
          to={`/editarpostagem/${postagem.id}`}
          className="w-full text-white bg-gray-800
                    hover:bg-gray-400 flex items-center justify-center py-2"
        >
          <button>Editar</button>
        </Link>
        <Link
          to={`/deletarpostagem/${postagem.id}`}
          className="text-white bg-red-700
                    hover:bg-red-400 w-full flex items-center justify-center"
        >
          <button>Deletar</button>
        </Link>
      </div>
    </div>
  );
}

export default CardPostagem;
