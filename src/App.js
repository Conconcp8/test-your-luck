import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import './App.css';
import styled from 'styled-components';
import { useCallback } from 'react';
import Play from './Play';

const CoolButton = styled.button`
  background-color: #ff8359;
  color: #fff;
  border-radius: 60px;
  font-size: 350%;
  padding: 2% 10%;
  margin-top: 10%;
  border-width: 0px;
  cursor: pointer;

  :hover {
    background-color: #b35c3e;
    color: #b3b3b3;
  }
`;

const TitleText = styled.h1`
  font-size: 350%;
  margin-top: 15%;
`;



function App() {
  const navigate = useNavigate();
  const handleClick = useCallback(() => {
    navigate('/play');
  }, [navigate]);
  return (
    <div className="App">
      <header className="App-header">
        <TitleText>Welcome to Test Your Luck!</TitleText>
        <CoolButton onClick={handleClick}>Play</CoolButton>
      </header>
    </div>
  );
}

function RouteApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/play" element={<Play />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
