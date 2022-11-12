import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Herosection from "../herosection/Herocection"
import Card from '../card/Card.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Herosection />
        <Card />
      </div>
    )
  }
}
