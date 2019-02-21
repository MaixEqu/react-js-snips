// https://webformyself.com/rabota-s-ref-v-react/

import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.textInput_1 = React.createRef();
    this.textInput_2 = React.createRef();
    this.state = {
      value_1: 'val 1',
      value_2: 'val 2',
      cols: 40,
      rows: 7,
    }
  }

  handleSubmit_1 = e => {
    e.preventDefault();
    this.setState({ value_1: this.textInput_1.current.value})
  };
  handleSubmit_2 = e => {
    e.preventDefault();
    this.setState({ value_2: this.textInput_2.current.value})
  };
  handleOnChange = e => {
    //e.preventDefault();
    //alert("onChange")
    return true;
  }

  render() {
    const s = this.state;
    return (
      <div>
        <h3>React Ref - createRef (J2L, v.4+)</h3>
        <textarea rows={s.rows} cols={s.cols} 
          value={this.state.value_1} 
          onChange={this.handleOnChange} 
          readOnly={true} 
        />
        <form onSubmit={this.handleSubmit_1}>
          <textarea rows={s.rows} cols={s.cols} ref={this.textInput_1} defaultValue="input-1" />
          <br />
          <button>Submit</button>
        </form>
        <h3>Value 2: {this.state.value_2}</h3>
        <form onSubmit={this.handleSubmit_2}>
          <input type="text" ref={this.textInput_2} defaultValue="input-2" />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));