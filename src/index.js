// https://webformyself.com/rabota-s-ref-v-react/

import * as React from "react";
import * as ReactDOM from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props)
    
    this.textInput = React.createRef();
    this.state = {
      value: 'here from input'
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    this.setState({ value: this.textInput.current.value})
  };

  render() {
    return (
      <div>
        <h1>React Ref - createRef (J2L, v.2)</h1>
        <h3>Value: {this.state.value}</h3>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref={this.textInput} defaultValue="input default..." />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));