import React from 'react';
import './App.css';
import './components/Navbar/Navbar.css';
import AboutView from './views/AboutView';
import ProjectView from './views/ProjectView';
import DrawingView from './views/DrawingView';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import ResumeSection from './components/ResumeSection';

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <div>
            <nav className="navbar">
                <NavLink className="navlink" activeClassName="active" to="/" exact={true}>About + Projects</NavLink>
                <NavLink className="navlink" activeClassName="active" to="/experience">Experience</NavLink>
                <NavLink className="navlink" activeClassName="active" to="/drawings">Drawings</NavLink>
            </nav>
            <Switch>
              <Route exact path="/">
                <AboutView />
              </Route>
              <Route exact path="/experience">
                <ResumeSection />
              </Route>
              <Route exact path="/drawings">
                <DrawingView />
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
