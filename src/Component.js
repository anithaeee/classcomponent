import React, { Component } from 'react';

class Greeting extends Component {
  constructor(){
    super();
    this.state={vechile:"car"}
  }
  render() {
    return <h1>I have a car {this.state.vechile}</h1>
  }
}
export default Greeting;