import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Student from './components/Student';
import Create from './components/Create';
import Update from './components/Update';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Student />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
