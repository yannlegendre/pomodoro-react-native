import React from 'react';
import Timer from './timer'

export default class App extends React.Component {
  render() {
    return (
      <Timer duration={5}/>
    );
  }
}

