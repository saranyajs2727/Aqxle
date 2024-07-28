
import './App.css';
import GlobalStyle from './common/GlobalStyle';
import Dashboard from './components/Dashborad/Dashboard';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Graph from './components/Graph/Graph';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Dashboard />


    </div>
  //   <Router>
  //   <div>
  //     <Routes>
  //     <Route path="/" element={<Dashboard />} />
  //     <Route path="/graph" element={<Graph />} />
  //     </Routes>
  //   </div>
  // </Router>
  );
}

export default App;
