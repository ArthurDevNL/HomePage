import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Publications from './pages/Publications';
import DualityOfIntelligence from './pages/posts/DualityOfIntelligence';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/publications" element={<Publications />} />
        <Route path="/posts/duality-of-intelligence" element={<DualityOfIntelligence />} />
      </Routes>
    </Router>
  );
}

export default App;

