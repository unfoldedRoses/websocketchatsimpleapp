
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Header />} />
      </Routes>
    </Router>
  );
}

export default App;
