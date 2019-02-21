// https://webformyself.com/rabota-s-ref-v-react/

import * as React from "react";
import * as ReactDOM from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.textInput1 = React.createRef();
    this.textInput2 = React.createRef();
    this.state = {
      value1: 'val 1',
      value2: 'val 2',
    }
  }

  handleSubmit1 = e => {
    e.preventDefault();
    this.setState({ value1: this.textInput1.current.value})
  };
  handleSubmit2 = e => {
    e.preventDefault();
    this.setState({ value2: this.textInput2.current.value})
  };

  render() {
    return (
      <div>
        <h1>React Ref - createRef (J2L, v.3)</h1>
        <h3>Value1: {this.state.value1}</h3>
        <h3>Value2: {this.state.value2}</h3>
        <form onSubmit={this.handleSubmit1}>
          <input type="text" ref={this.textInput1} defaultValue="input 1" />
          <button>Submit</button>
        </form>
        <form onSubmit={this.handleSubmit2}>
          <textarea ref={this.textInput2} defaultValue="input 2" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));