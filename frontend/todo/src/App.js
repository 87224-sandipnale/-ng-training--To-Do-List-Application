import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TaskComponent from '../src/services/TaskComponent';

function App() {
  return (
    <Routes>
      <Route path="/" element={<TaskComponent />} />
    </Routes>
  );
}

export default App;
