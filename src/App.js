import logo from "./logotipo.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://loja-negociosdeesporte.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Uniformes Esportivos
        </a>
        <a
          className="App-link"
          href="https://curso-homci.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Coaching Esportivo
        </a>
      </header>
    </div>
  );
}

export default App;
