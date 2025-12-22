import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LFOEffects from './tools/LFOEffects';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tools/lfo-effects" element={<LFOEffects />} />
      </Routes>
    </Router>
  );
}

export default App;
