import React, { Component } from 'react';
import Beginnings from './Beginnings'
import MotionPictures from './MotionPictures'
import Personality from './Personality'
import LateLife from './LateLife'
import Filmography from './Filmography'
import Closing from './Closing'

class Homepage extends Component {
  render() {
    return (
      <main>
        <Beginnings/>
        <MotionPictures/>
        <Personality/>
        <LateLife/>
        <Filmography/>
        <Closing/>
      </main>
    );
  }
}

export default Homepage
