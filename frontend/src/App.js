import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css';
import Authentication from './Pages/Authentication';

function App() {
  return (
    <Router>
      <>
      <Routes>
        <Route path="/" element={<Authentication />} />
      </Routes>
      </>
    </Router>
  );
}

export default App;
