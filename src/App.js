import React, { Component } from 'react';
import './App.css';
import {Button, Container} from 'semantic-ui-react';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <Container>
        <Card />
      </Container>
    );
  }
}

export default App;
