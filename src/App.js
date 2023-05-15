import Container from './components/Container'
import { DarkModeProvider } from './components/DarkModeContext';
import './App.css';

function App() {
  return (
    <div className="App">
      <DarkModeProvider>
      <Container />
      </DarkModeProvider>
    </div>
  );
}

export default App;