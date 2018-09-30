import React, { Component } from 'react';
import Beginnings from './Beginnings'
import MotionPictures from './MotionPictures'

class Homepage extends Component {
  render() {
    return (
      <main>
        <Beginnings/>
        <MotionPictures/>
      </main>
    );
  }
}

export default Homepage
