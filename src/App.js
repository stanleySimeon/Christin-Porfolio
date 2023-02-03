import './App.css';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home';

function App() {
  return (
    <div className="container-fluid p-0 overflow-x-hidden">
      <Navigation />
      <Home />
    </div>
  );
}

export default App;
