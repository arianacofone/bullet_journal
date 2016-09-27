import React, { Component } from 'react';

const propTypes = {
  id: React.PropTypes.string,
  httpDelete: React.PropTypes.func,
  httpDonePatch: React.PropTypes.func,
  httpSnoozePatch: React.PropTypes.func,
  items: React.PropTypes.array,
};

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localInput: '',
    };
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
    this.handleDoneClick = this.handleDoneClick.bind(this);
    this.handleSnoozeClick = this.handleSnoozeClick.bind(this);
  }
  handleDoneClick(e) {
    e.preventDefault();
    this.props.httpDonePatch(e.target.value);
  }
  handleSnoozeClick(e) {
    e.preventDefault();
    this.props.httpSnoozePatch(e.target.value);
  }
  handleDeleteClick(e) {
    e.preventDefault();
    this.props.httpDelete(e.target.value);
  }
  render() {
    const ids = Object.keys(this.props.items);
    const itemElements = ids.map((id, idx) => {
      const item = this.props.items[id];
      return (
        <li key={idx} id={item.id}>
          {item.Input}
          <div id="action-buttons">
            <button
              name="task"
              type="submit"
              id="snooze-button"
              value={item.id}
              onClick={this.handleSnoozeClick}
            />
            <button
              name="note"
              type="submit"
              id="delete-button"
              value={item.id}
              onClick={this.handleDeleteClick}
            />
            <button
              name="task"
              type="submit"
              id="done-button"
              value={item.id}
              onClick={this.handleDoneClick}
            />
          </div>
        </li>
      );
    });
    return (
      <ul>
        {itemElements}
      </ul>
    );
  }
}

ToDoList.propTypes = propTypes;
export default ToDoList;
