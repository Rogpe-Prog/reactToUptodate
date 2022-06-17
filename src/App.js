import { useState } from 'react';

import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');

  const [user, setUser] = useState({});

  const handleRegister = (e) => {
    e.preventDefault();
    
    if (nome !== '' & email !== '' & idade !== 0){
      setUser({
        nome,
        idade,
        email
      })
    }
    setNome('');
    setIdade('');
    setEmail('');

  }


  return (
    <div className="App">
      <h1>Cadastrar Usuário</h1>
      <form onSubmit={handleRegister}>
        <label>Nome:</label><br/>
        <input 
          placeholder='Digite seu nome' 
          value={nome}
          onChange={ (e) => setNome(e.target.value)}
        /><br/>

        <label>Email:</label><br/>
        <input 
          placeholder='Digite seu e-mail' 
          value={email}
          onChange={ (e) => setEmail(e.target.value)}
        /><br/>

        <label>Idade:</label><br/>
        <input 
          type="text" pattern="[0-9]*"
          placeholder='Digite sua idade' 
          value={idade}
          onChange={ (e) => setIdade(e.target.value)}
        /><br/><br/>

        <button type='submit'>Registrar</button>
      </form>
      <br/><br/>
      <div>
        <span>Bem vindo: {user.nome}</span><br/>
        <span>Email: {user.email}</span><br/>
        <span>Idade: {user.idade}</span><br/>
      </div>
    </div>
  );
}

export default App;


