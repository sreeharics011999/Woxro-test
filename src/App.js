// import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes, NavLink } from "react-router-dom"
import './App.css';
import Home from './Component/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
      <Home/>
      </Router>
 
    </div>
  );
}

export default App;
