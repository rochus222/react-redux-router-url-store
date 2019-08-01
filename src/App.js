import React from 'react';
import ItemsContainer from './containers/items';
import ItemContainer from './containers/item';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={ItemsContainer} />
        <Route path="/item/:id" exact component={ItemContainer} />
      </Router>
    </div>
  );
}

export default App;
