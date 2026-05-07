import axios from "axios";

const api = axios.create({
  baseURL: "https://blogpessoa-1arj.onrender.com",
});

export const cadastrarUsuario = async (
  url: string,
  dados: object,
  setDados: Function,
) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};
export const login = async (url: string, dados: object, setDados: Function) => {
  const resposta = await api.post(url, dados);
  setDados(resposta.data);
};
