import Navigation from './components/navigation/Navigation';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Activity from './components/Activity';
import './App.css';

function App() {
  return (
    <div className="container-fluid p-0 overflow-x-hidden">
      <Navigation />
      <Home />
      <About />
      <Activity />
      <Projects />
    </div>
  );
}

export default App;
