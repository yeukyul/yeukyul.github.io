import React from 'react';
import './App.css';
import './components/Navbar/Navbar.css';
import AboutView from './views/AboutView';
import Footer from './components/Footer';
import Construction from './components/Construction';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <nav className="navbar">
                <NavLink className="navlink" activeClassName="active" to="/" exact={true}>About</NavLink>
                <NavLink className="navlink" activeClassName="active" to="/projects">Projects</NavLink>
            </nav>
            <Switch>
              <Route exact path="/">
                <AboutView />
              </Route>
              <Route exact path="/projects">
                <Construction />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
      <Footer />
    </>
  );
}

export default App;
