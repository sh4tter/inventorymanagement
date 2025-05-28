import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Authentication from './Pages/Authentication';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Authentication mode="login" />} />
      </Routes>
    </Router>
  );
}

export default App;