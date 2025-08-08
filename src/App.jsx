import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TrashProvider } from "./pages/context/TrashContext";
import Home from './pages/Home'; // ✅ NEW
import TrashAnalyzer from './pages/TrashAnalyzer';
import ResultPage from './pages/ResultPage';

function App() {
  return (
    <TrashProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} /> {/* 🏠 Home page is now root */}
          <Route path="/analyze" element={<TrashAnalyzer />} /> {/* ✍️ Analyzer screen */}
          <Route path="/result" element={<ResultPage />} /> {/* 📊 Result screen */}
        </Routes>
      </Router>
    </TrashProvider>
  );
}

export default App;
