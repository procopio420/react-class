import React from 'react'

function UserLogin(props) {
  const welcomeMessage = () => {
    if (props.logged) {
      return <p>{`Olá ${props.nome}`}</p>;
    }
  };
  return (
    <div className = 'user-login'>
      {welcomeMessage()}
      <input
        placeholder="nome"
        onChange={props.handleInputChange}
        value={props.nomeInput}
        className = {props.logged ? 'hide' : 'login-input'}
      ></input>
      <button onClick={props.handleLogin}>
        {props.logged ? 'Sair' : 'Entrar'}
      </button>
    </div>
  );
}

export default UserLogin
