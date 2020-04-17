import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Layout from './components/Layout/Layout';
import HomePage from './components/HomePage/HomePage';
import AboutCorona from './components/AboutCorona/AboutCorona';

function App() {
  return (
      <BrowserRouter>
        <div className="App">
          <Layout>
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about-corona"  component={AboutCorona} />
            </Switch>
          </Layout>
        </div>
      </BrowserRouter>
  );
}

export default App;
