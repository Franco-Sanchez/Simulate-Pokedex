import { BrowserRouter as Router, Route } from 'react-router-dom';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon'

function App() {
  return (
    <Router>
      <Route exact path="/" component={Pokemons} />
      <Route path="/pokemon/:name" component={Pokemon} />
    </Router>
  );
}

export default App;
