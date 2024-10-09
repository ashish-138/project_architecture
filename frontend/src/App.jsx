import logo from './logo.svg';
import {BrowsRouter as Router, Routes, Route} from "react-router-dom"
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element = {""}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
