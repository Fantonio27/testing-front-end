import { useState } from 'react'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar from './components/navbar.component';
import Health_list from './components/health-list';
import Edit from './components/edit.component';
import Create from './components/create.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <br />
        <Routes>
          <Route path="/" index element={<Health_list/>}></Route>
          <Route path="/edit/:id"element={<Edit/>}></Route>
          <Route path="/create" element={<Create/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
