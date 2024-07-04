import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/MainPage/MainPage';
import Home from './components/Home/Home'
import RegisterForm from './components/RegisterForm/RegisterForm';
import GetPlants from './components/GetPlants/GetPlants';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/get-plants" element={<GetPlants />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
