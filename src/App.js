import React from 'react';
import './App.css';
import Footer from './components/footer/footer';
import Nav from './components/nav/nav';
import Searchcurrent from './components/search-current/search-current';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './components/about/about';
import Searchhist from './components/search-hist/search-hist';

function App() {
  return (
    <div className="App">
      
      <Router>
        <Nav/>
        <Switch>
          <Route path="/current" exact component={Searchcurrent}/>
          <Route path="/history" exact component={Searchhist}/>
          <Route path="/" exact component={About}/>
        </Switch>
        <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
