import React from 'react';
import Layout from './components/layout/Layout';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switch>
        <Layout>
          <Route path="/login">
            
          </Route>
      </Layout>
      </Switch>
    </Router>
    
  );
}

export default App;
