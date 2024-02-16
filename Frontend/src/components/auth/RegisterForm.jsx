import React from 'react';
import useRegisterForm from '../../hooks/useRegisterForm';

const RegisterForm = () => {
  const { fullName, setFullName, username, setUsername, email, setEmail, password, setPassword, resetForm } = useRegisterForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de registro
    console.log('Nombre completo:', fullName);
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    console.log('Email:', email);
    // Limpia el formulario después de enviar
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="fullName">Nombre completo:</label>
        <input
          type="text"
          id="fullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="username">Usuario:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Registrarse</button>
    </form>
  );
};

export default RegisterForm;
