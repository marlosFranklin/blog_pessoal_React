import axios, { type AxiosRequestConfig } from "axios";
import type { Dispatch, SetStateAction } from "react";

type StateSetter<T> = Dispatch<SetStateAction<T>>;

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const cadastrarUsuario = async <T>(
  url: string,
  dados: object,
  setDados: StateSetter<T>,
) => {
  const resposta = await api.post<T>(url, dados);
  setDados(resposta.data);
};
export const login = async <T>(
  url: string,
  dados: object,
  setDados: StateSetter<T>,
) => {
  const resposta = await api.post<T>(url, dados);
  setDados(resposta.data);
};

export const buscar = async <T>(
  url: string,
  setDados: StateSetter<T>,
  header: AxiosRequestConfig,
) => {
  const resposta = await api.get<T>(url, header);
  setDados(resposta.data);
};

export const cadastrar = async <T>(
  url: string,
  dados: object,
  setDados: StateSetter<T>,
  header: AxiosRequestConfig,
) => {
  const resposta = await api.post<T>(url, dados, header);
  setDados(resposta.data);
};

export const atualizar = async <T>(
  url: string,
  dados: object,
  setDados: StateSetter<T>,
  header: AxiosRequestConfig,
) => {
  const resposta = await api.put<T>(url, dados, header);
  setDados(resposta.data);
};

export const deletar = async (url: string, header: AxiosRequestConfig) => {
  await api.delete(url, header);
};
