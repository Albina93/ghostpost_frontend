import React from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Post from './components/Post.js';
import Welcome from './components/Welcome';
import Roast from "./components/Roast";
import Boast from "./components/Boast";
import Popular from "./components/Popular";
import Form from "./components/Form";
import Navigation from "./components/Navigation";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Route
        exact
        path="/"
        render={props => <Welcome {...props} name="Albina" />}
      />
      <Route path="/post" component={Post} />
      <Route path="/roasts" component={Roast} />
      <Route path="/boasts" component={Boast} />
      <Route path="/popular" component={Popular} />
      <Route path="/create" component={Form} />
      
    </div>
  );
}

export default App;
