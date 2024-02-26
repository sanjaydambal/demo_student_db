
import './App.css';
import { BrowserRouter as Router, Routes, Route } from'react-router-dom';
import Student from './components/Student';
import Create from './components/Create';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Student />} />
      <Route path="/create" element={<Create />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
