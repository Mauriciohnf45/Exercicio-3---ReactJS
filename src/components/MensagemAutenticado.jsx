import React from 'react';

function MensagemAutenticado({ autenticado }) {
  if (autenticado) {
    return <h1>Bem-vindo, usuário!</h1>;
  }
  return null;
}

export default MensagemAutenticado;
