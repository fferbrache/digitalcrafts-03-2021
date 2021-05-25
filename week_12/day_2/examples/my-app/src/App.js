import './App.css';
import React from 'react';
import Home from './components/Home';
import Blog from './components/Blog';
import AboutMe from './components/AboutMe';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
  
  return (
    <div className="App">
      <Router>
        <div>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/blog">Blog</Link>
            </nav>
        </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/aboutme">
            <AboutMe />
          </Route>
          <Route path="/blog">
            <Blog />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
