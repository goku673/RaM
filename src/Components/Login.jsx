import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Login.css"
function Login() {
  // aquí vendrán los datos que pondré en mi input
  const [userData, setUserData] = useState({
    email: '',
    password: ''
  });

  // para controlar los datos si están errados de mi input
  const [dataError, setDataError] = useState({
    errorEmail: '',
    errorPassword: ''
  });

  // expresiones regulares para contraseña y número
  const expressionRegularEmail = /^\w+([.-_+]?w+)*@w+([.-]?w+)*(.w{2,10})+$/;
  const expressionRegularPassword = /^(?=.*d.*d.*d)[^s]{8,}$/;

  // cuando esté escribiendo en el input me dispare el evento
  const handleInput = (evento) => {
    const { value, name } = evento.target;
    // para que no lo dejen vacío un input
    if (value.length <= 0) {
      setDataError({
        ...dataError,
        [`${name}Error`]: 'El input no puede estar vacío'
      });
    } else {
      setDataError({
        ...dataError,
        [`${name}Error`]: ''
      });
    }

    console.log(value);
    // esto es para que en tu input tenga un email ent correo y el punto
    if (name === 'email') {
      if (!expressionRegularEmail.test(value)) {
        setDataError({
          ...dataError,
          errorEmail: 'Te falta un @ mi rey'
        });
      }
    }

    // verificamos que tenga al menos 3 numeros
    if (name === 'password') {
      if (!expressionRegularPassword.test(value)) {
        setDataError({
          ...dataError,
          errorPassword: 'Tu formulario debe tener al menos 3 números'
        });
      }
    }

    // verificamos que tu password no sea tan corta
    if (value.length < 5) {
      setDataError({
        ...dataError,
        errorPassword: 'Tu contraseña debe tener más de 5 caracteres'
      });
    }

    setUserData({
      ...userData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos enviados: ', userData);
  };

  return (
    <div className="header">
      <h1 className="registrarse-bro">Regístrate hola a todas las personas</h1>

      <form onSubmit={handleSubmit} className="formulario-container">
        <label>
          Email :
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleInput}
            aria-label="Ingrese su correo electrónico"
          />
          {dataError.errorEmail && (
            <p className="error-email">{dataError.errorEmail}</p>
          )}
        </label>

        <label>
          Password:
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleInput}
          />
          {dataError.errorPassword && (
            <p className="error-password">{dataError.errorPassword}</p>
          )}
        </label>
        <Link to="/home">
          <button>Enviar</button>
        </Link>
      </form>
    </div>
  );
}

export default Login;
