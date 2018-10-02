import React, { Component } from 'react';
import Beginnings from './Beginnings'
import MotionPictures from './MotionPictures'
import BeingStany from './BeingStany'
import Filmography from './Filmography'
import Closing from './Closing'

class Homepage extends Component {
  render() {
    return (
      <main>
        <Beginnings/>
        <MotionPictures/>
        <BeingStany/>
        <Filmography/>
        <Closing/>
      </main>
    );
  }
}

export default Homepage
