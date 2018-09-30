import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header'
import Homepage from './components/Homepage'
import Footer from './components/Footer'
import './App.css';

class Routes extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header />
        <Switch>
          <Route exact path="/" component={Homepage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Routes
