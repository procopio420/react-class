import React from 'react';

import './style.css';

function UserLogin(props) {
  return (
    <div className='user-login row'>
      {!props.logged ? (
        <form className='form-inline'>
          <input
            className='form-control form-border'
            placeholder='Nome'
            onChange={props.handleInputChange}
            value={props.nomeInput}
          />
          <button
            className='btn btn-primary btn-border'
            onClick={props.handleLogin}
          >
            Entrar
          </button>
        </form>
      ) : (
        <>
          <p>Olá, {props.nome}</p>
          <button className='btn btn-primary ml-4' onClick={props.handleLogin}>
            Sair
          </button>
        </>
      )}
    </div>
  );
}

export default UserLogin;
