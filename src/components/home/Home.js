import React, { Component } from 'react';
import Herosection from "../herosection/Herocection"
import Card from '../card/Card.js';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Herosection />
        <Card />
      </div>
    )
  }
}
