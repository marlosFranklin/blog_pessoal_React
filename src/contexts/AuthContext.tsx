import React, { useState, useEffect, type ReactNode } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";
import { login } from "../services/service";
import { Bounce, toast } from "react-toastify";

interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

interface AuthProviderProps {
  children: ReactNode;
}

const usuarioInicial: UsuarioLogin = {
  id: 0,
  nome: "",
  usuario: "",
  senha: "",
  foto: "",
  token: "",
};

export const AuthContext = React.createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogin>(usuarioInicial);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Recupera o usuário salvo quando a aplicação inicia
  useEffect(() => {
    const usuarioStorage = localStorage.getItem("usuario");

    if (usuarioStorage) {
      setUsuario(JSON.parse(usuarioStorage));
    }
  }, []);

  async function handleLogin(usuarioLogin: UsuarioLogin) {
    setIsLoading(true);

    try {
      await login("/usuarios/logar", usuarioLogin, setUsuario);

      const usuarioAtualizado = localStorage.getItem("usuario");

      if (!usuarioAtualizado) {
      }

      toast.success("O Usuário foi autenticado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    } catch (error) {
      toast.error("Erro ao efetuar o Login, tente novamente", {
        position: "top-right",
        autoClose: 5000,
        theme: "colored",
        transition: Bounce,
      });
    } finally {
      setIsLoading(false);
    }
  }

  // Sempre que o usuário mudar, salva ou remove do localStorage
  useEffect(() => {
    if (usuario.token) {
      localStorage.setItem("usuario", JSON.stringify(usuario));
    } else {
      localStorage.removeItem("usuario");
    }
  }, [usuario]);

  function handleLogout() {
    setUsuario(usuarioInicial);
    localStorage.removeItem("usuario");
  }

  return (
    <AuthContext.Provider
      value={{ usuario, handleLogout, handleLogin, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
}
