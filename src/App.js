import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Project from './views/Project';
import User from './views/User';
import Home from './views/Home';
import Header from './components/Header';
import { Container } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Header />
      <Container maxWidth="xl" sx={{ my: 3 }}>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/project/:id" element={<Project/>} />
          <Route exact path="/project/" element={<Project/>} />
          <Route exact path="/user" element={<User/>} />
          <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
