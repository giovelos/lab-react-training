import './App.css';
import IdCards from './components/IdCards';

function App() {
  const className = "Maria"
  const classLastName = "Silva"
  const classGender = "feminino" || "masculino"
  const classHeight = 70
  const classBirth ={("04-15-1988")}

  const picture="https://github.com/giovelos/lab-react-training/blob/master/public/maxence-glasses.png"

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>IdCards</h1>
        <p>Nome{className}</p>
        <p>Sobrenome{classLastName}</p>
        <p>Gênero{classHeight}</p>
        <p>Aniversário{classBirth}</p>     
        <img src={picture} alt="maxence" />            
        
        <IdCards/>
      </header>
    </div>
  );
}

export default App;
