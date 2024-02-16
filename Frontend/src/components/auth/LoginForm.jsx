import React from 'react';
import useLoginForm from '../../hooks/useLoginForm';

const LoginForm = () => {
  const { username, password, setUsername, setPassword, resetForm } = useLoginForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de inicio de sesión
    console.log('Usuario:', username);
    console.log('Contraseña:', password);
    // Limpia el formulario después de enviar
    resetForm();
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  );
};

export default LoginForm;
