import About from './About';
import './App.css';
import Header from './Header';
import Home from './Home';
import Landing from './Landing';
import Social from './Social';
import Team from './Team';
import Events from './Events';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
      {/* <Landing/> */}
      <About/>
      <Events />
      <Team />
      <Social />
    </div>
  );
}

export default App;
