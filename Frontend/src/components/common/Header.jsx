import React, { useState } from "react";
import LoginForm from "../auth/LoginForm";
import RegisterForm from "../auth/RegisterForm";
import User from "./User";

const Header = () => {
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleLoginClick = () => {
    setShowLoginForm(true);
    setShowRegisterForm(false);
  };

  const handleRegisterClick = () => {
    setShowLoginForm(false);
    setShowRegisterForm(true);
  };

  return (
    <header className="bg-[#8AE0DB] text-[#F4F4F4] p-4 border-b-8 border-[#5DC1B9]">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-bold text-[#313131] drop-shadow-md uppercase font-kodchasan">
            Bienestar Express
          </h1>
        </div>
        <div className="flex items-center">
          <User /> {/* Componente User */}
          <button
            onClick={handleLoginClick}
            className="ml-4 text-lg font-semibold text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-lg focus:outline-none"
          >
            Iniciar sesión
          </button>
          <span className="mx-2 text-gray-400">|</span> {/* Separador */}
          <button
            onClick={handleRegisterClick}
            className="text-lg font-semibold text-white bg-green-500 hover:bg-green-600 px-4 py-2 rounded-lg ml-2 focus:outline-none"
          >
            Registrarse
          </button>
        </div>
      </div>
      {showLoginForm && <LoginForm />} {/* Mostrar formulario de inicio de sesión si showLoginForm es verdadero */}
      {showRegisterForm && <RegisterForm />} {/* Mostrar formulario de registro si showRegisterForm es verdadero */}
    </header>
  );
};

export default Header;
