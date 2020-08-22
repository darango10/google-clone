import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Search from "./components/Search";
import SearchPage from "./pages/SearchPage";

function App() {
  return (
      <div className="app">
          <Router>
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/search">
                      <SearchPage/>
                  </Route>
              </Switch>
          </Router>


      </div>
  );
}

export default App;
