import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Counter from './pages/Counter';
import Input from './pages/Input';
import Inputs from './pages/Inputs';
import List from './pages/List';
function App() {
  return (
    <div className="App Example">
      <h1>App</h1>
      <nav>
        <Link to="/">Home</Link>|
        <Link to="/counter">Counter</Link>|
        <Link to="/input">Input</Link>|
        <Link to="/inputs">Inputs</Link>|
        <Link to="/list">List</Link>|
        <Link to="/about">About</Link>|
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/counter" element={<Counter/>} />
        <Route path="/input" element={<Input/>} />
        <Route path="/inputs" element={<Inputs/>} />
        <Route path="/list" element={<List/>} />
        <Route path="/about" element={<About/>} />
      </Routes>

    </div>
  );
}

export default App;
