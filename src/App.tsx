import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/Nav";
import Home from "./pages/Home";
import Cadastro from "./pages/cadastro";
import Login from "./pages/login";
import { AuthProvider } from "./contexts/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <NavBar />
          <div className=" min-h-[80vh]">
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
