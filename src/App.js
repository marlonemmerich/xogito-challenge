import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Project from './views/Project';
import User from './views/User';
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <header>
        <div>Header</div>
      </header>
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
        <Route exact path="/user" element={<User/>} />
        <Route path="*" element={<Navigate to="/"/>} />
      </Routes>
    </div>
  );
}

export default App;
