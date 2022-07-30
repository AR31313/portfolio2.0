import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import About from './Components/About/About'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

//Put all the component together 
function App() {

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <Nav />

          </p>
          <Routes>
            <Route exact path="/about" element={<About />} />
          </Routes>

        </header>
      </div>
    </Router>
  );
}

export default App;