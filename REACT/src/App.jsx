import React from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Counter from './component/counter'; 

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/counter" element={<Counter App />} />
        <Route path="/stopwatch" element={<h1>Stopwatch App</h1>} />
        <Route path="*" element={<h1>No Page Available</h1>} />
      </Routes>
    </div>
  );
};

export default App;
