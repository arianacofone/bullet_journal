import React, { Component } from 'react';

const propTypes = {
  handlePost: React.PropTypes.func,
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localInput: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleEditInput = this.handleEditInput.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.handlePost({
      localInput: this.state.localInput,
    });
  }
  handleEditInput(e) {
    const data = e.target.value;
    this.setState({ localInput: data })
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
            type="submit"
            value="DOT"
          />
          <input
            type="submit"
            value="CIRCLE"
          />
          <input
            type="submit"
            value="DASH"
          />
        </form>
      </div>
    );
  }
}

Input.propTypes = propTypes;

export default Input;
