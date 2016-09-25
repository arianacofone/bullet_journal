import React, { Component } from 'react';
import Input from './Input.jsx';

class ToDoList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const ids = Object.keys(this.props.items);
    const itemElements = ids.map((id, idx) => {
      const item = this.props.items[id];
      return (
        <li key={idx}>
          <form>
            <input value={item.localInput} />
            <input
              name="task"
              type="submit"
              value="Done"
            />
            <input
              name="event"
              type="submit"
              value="Snooze"
            />
            <input
              name="note"
              type="submit"
              value="Delete"
              // onSubmit={this.props.httpPost}
            />
          </form>
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

export default ToDoList;
