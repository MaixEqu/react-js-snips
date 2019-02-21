// sources:
// https://stackoverflow.com/questions/49161441/react-js-how-to-access-component-by-id-and-call-its-method
// https://codesandbox.io/s/6y9p69q0xw

import React, { Component } from 'react';
import { render } from 'react-dom';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const ProgressBar = props => (
  <div style={{ display: 'block', width: `${props.percentage}%`, height: 20, backgroundColor: '#ccc' }} />
);

class App extends Component {
  state = {
    percentage: 0,
  }

  componentDidMount() {
    setInterval(() => {
      let nextPercent = this.state.percentage+1;
      if (nextPercent >= 100) {
        nextPercent = 0;
      }
      this.setState({ percentage: nextPercent });
    }, 100);
  }

  render() {
    return (
      <div style={styles}>
        <h2>Progress bar (J2L)</h2>
        <ProgressBar percentage={this.state.percentage} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
