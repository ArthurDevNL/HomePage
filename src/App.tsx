import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import DualityOfIntelligence from './pages/posts/DualityOfIntelligence';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts/duality-of-intelligence" element={<DualityOfIntelligence />} />
      </Routes>
    </Router>
  );
}

export default App;