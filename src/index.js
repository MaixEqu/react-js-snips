// https://webformyself.com/rabota-s-ref-v-react/

import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props)
    this.textInput_1 = React.createRef();
    this.textInput_2 = React.createRef();
    this.textInput_r = React.createRef();
    this.state = {
      value_1: 'val 1',
      value_2: 'val 2',
      cols1: 40,
      cols2: 44,
      rows: 7,
    }
  }

  handleSubmit_1 = e => {
    e.preventDefault();
    console.log(e)
    console.log(this.textInput_1)
    console.log(this.textInput_r)
    this.setState({ value_1: this.textInput_1.current.value, cols1: 44, cols2: 22 })
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
    const t = `line1\nline2\nl3\nl-4\nline-5\n repeat: line1\nline2\nl3\nl-4\nline-5\n`
    return (
      <div>
        <h3>React Ref - createRef (J2L, v.5).<br /> Textareas properties tests</h3>
        <textarea rows={s.rows} cols={s.cols1} 
          value={this.state.value_1} 
          onChange={this.handleOnChange} 
          ref={this.textInput_r}
          readOnly={true} 
        />
        <form onSubmit={this.handleSubmit_1}>
          <textarea rows={s.rows} cols={s.cols2} 
            ref={this.textInput_1} 
            defaultValue={t}
          />
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