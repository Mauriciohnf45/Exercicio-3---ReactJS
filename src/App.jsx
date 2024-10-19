import React from 'react';
import MensagemAutenticado from './components/MensagemAutenticado';

function App() {
  return (
    <div className="App">
      <MensagemAutenticado autenticado={true} />
    </div>
  );
}

export default App;
