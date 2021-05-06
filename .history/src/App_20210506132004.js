import React from 'react';
import Layout from './components/layout/Layout';
import {BrowserRouter as Router, Switch} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Layout>
        <p>Hello world</p>
      </Layout>
    </Router>
    
  );
}

export default App;
