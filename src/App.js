
import './App.css';
import GlobalStyle from './common/GlobalStyle';
import Dashboard from './components/Dashborad/Dashboard';
import {  HashRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Graph from './components/Graph/Graph';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath !== '/' && currentPath !== '/graph') {
      window.location = '/#' + currentPath;
    }
  }, []);
  return (
    // <div>
    //   <GlobalStyle />
    //   <Dashboard />


    // </div>
    <Router>
    <div>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/graph" element={<Graph />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
