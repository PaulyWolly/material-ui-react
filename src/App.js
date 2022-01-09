/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Notes from './pages/Notes'
import Create from './pages/Create'
import Home from './pages/Home'

//components
import BsNavbar from './components/BsNavbar/BsNavbar'

import './App.css';

function App() {
  return (
    <Router>
        <BsNavbar />
        <div className="App">
         <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route exact path="/notes" element={<Notes />}></Route>
            <Route exact path="/create" element={<Create />}></Route>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
