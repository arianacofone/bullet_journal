import React, { Component } from 'react';

const propTypes = {
  httpPost: React.PropTypes.func,
  Input: React.PropTypes.array,
};

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Input: this.props.Input || '',
    };
    this.handleTaskSubmit = this.handleTaskSubmit.bind(this);
    this.handleEventSubmit = this.handleEventSubmit.bind(this);
    this.handleNoteSubmit = this.handleNoteSubmit.bind(this);
    this.handleEditInput = this.handleEditInput.bind(this);
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      Input: nextProps.Input || '',
    });
  }
  handleEditInput(e) {
    const data = e.target.value;
    this.setState({
      Input: data,
    });
  }
  handleTaskSubmit(e) {
    e.preventDefault();
    const today = new Date().toJSON().slice(0, 10);
    this.props.httpPost({
      Input: `● ${this.state.Input}`,
      status: 'active',
      createDate: today,
    });
  }
  handleEventSubmit(e) {
    e.preventDefault();
    const today = new Date().toJSON().slice(0, 10);
    this.props.httpPost({
      Input: `○ ${this.state.Input}`,
      status: 'active',
      createDate: today,
    });
  }
  handleNoteSubmit(e) {
    e.preventDefault();
    const today = new Date().toJSON().slice(0, 10);
    this.props.httpPost({
      Input: `- ${this.state.Input}`,
      status: 'active',
      createDate: today,
    });
  }
  render() {
    return (
      <div id="input">
        <form className="input-display" onSubmit={this.handleSubmit}>
          <input
            id="task-input"
            type="text"
            name="todo"
            value={this.state.Input}
            onChange={this.handleEditInput}
            placeholder="Enter task, event, or note"
          />
          <input
            name="task"
            type="submit"
            value=" "
            className="input-btn"
            id="task-button"
            onClick={this.handleTaskSubmit}
          />
          <input
            name="event"
            type="submit"
            value=" "
            className="input-btn"
            id="event-button"
            onClick={this.handleEventSubmit}
          />
          <input
            name="note"
            type="submit"
            value=" "
            className="input-btn"
            id="note-button"
            onClick={this.handleNoteSubmit}
          />
        </form>
      </div>
    );
  }
}

Input.propTypes = propTypes;

export default Input;
