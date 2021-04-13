import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Pokemons from './pages/Pokemons';
import Pokemon from './pages/Pokemon';
import Header from './components/Header';
import logo from './assets/images/logo.svg';

function App() {
  return (
    <Router>
      <Header>
        <Link to='/'><img src={logo} alt='logo' /></Link>
      </Header>
      <main>
          <Route exact path="/" component={Pokemons} />
          <Route path="/pokemon/:name" component={Pokemon} />
      </main>
    </Router>
  );
}

export default App;
