import React from 'react';
import Layout from './components/layout/Layout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Roi
      </Layout>
      </Switch>
    </Router>
    
  );
}

export default App;
