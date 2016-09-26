import React, { Component } from 'react';
import Input from './Input.jsx';

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localInput: this.props.localInput,
    };
    this.changeInput = this.changeInput.bind(this);
  }
  changeInput(e) {
    const data = e.target.value;
    this.props.httpPatch({
      localInput: data,
      status: '',
      createDate: '',
    });
  }
  // handleSubmit(e) {
  //   e.preventDefault();
  //   this.props.httpPost({
  //     localInput: this.state.localInput,
  //     status: '',
  //     createDate: '',
  //   });
  // }
  render() {
    const ids = Object.keys(this.props.items);
    const itemElements = ids.map((id, idx) => {
      const item = this.props.items[id];
      return (
        <li key={idx} className="li-item">
          <form>
            <input
              value={item.localInput}
              id={item.id}
              onChange={this.changeInput}
              className="to-do-item"
            />
            <input
              name="task"
              type="submit"
              value="Done"
            />
            <input
              name="note"
              type="submit"
              value="Delete"
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
