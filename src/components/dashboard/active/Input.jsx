import React, { Component } from 'react';

// const propTypes = {
//   httpPost: React.PropTypes.func,
// };

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localInput: this.props.localInput || '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditInput = this.handleEditInput.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      localInput: nextProps.localInput || '',
    });
  }
  handleEditInput(e) {
    const data = e.target.value;
    this.setState({
      localInput: data,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.httpPost({
      localInput: this.state.localInput,
      status: '',
      createDate: '',
    });
  }
  render() {
    return (
      <div id="input">
        <h3>Input Form</h3>
        <form className="input-display" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="todo"
            value={this.state.localInput}
            onChange={this.handleEditInput}
          />
          <input
            name="task"
            type="submit"
            value="."
          />
          <input
            name="event"
            type="submit"
            value="o"
          />
          <input
            name="note"
            type="submit"
            value="-"
          />
        </form>
      </div>
    );
  }
}

// Input.propTypes = propTypes;

export default Input;
