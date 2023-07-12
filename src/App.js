import logo from './logotipo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        
        <a className="App-link" href="https://uol.com.br" target="_blank" rel="noopener noreferrer" >
          Loja de Artigos Esportivos
        </a>
        <a className="App-link" href="https://terra.com.br" target="_blank" rel="noopener noreferrer" >
          Curso Marcelo Homci
        </a>

      </header>
    </div>
  );
}

export default App;
