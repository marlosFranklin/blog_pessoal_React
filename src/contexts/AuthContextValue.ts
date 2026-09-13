import { createContext } from "react";
import type UsuarioLogin from "../models/UsuarioLogin";

export interface AuthContextProps {
  usuario: UsuarioLogin;
  handleLogout(): void;
  handleLogin(usuario: UsuarioLogin): Promise<void>;
  isLoading: boolean;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);
