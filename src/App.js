import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div className="container-fluid p-0 overflow-x-hidden">
      <Navigation />
      <Home />
      <About />
    </div>
  );
}

export default App;
