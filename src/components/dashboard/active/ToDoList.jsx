import React, { Component } from 'react';

const propTypes = {
  id: React.PropTypes.string,
  httpDelete: React.PropTypes.func,
  items: React.PropTypes.array,
};

class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      localInput: this.props.Input,
    };
    this.handleEditofInput = this.handleEditofInput.bind(this);
    this.handleNewSubmit = this.handleNewSubmit.bind(this);
    this.handleDeleteClick = this.handleDeleteClick.bind(this);
  }
  // componentWillReceiveProps(nextProps) {
  //   this.setState({
  //     localInput: nextProps.localInput;
  //   })
  // }
  handleEditofInput(e) {
    const newInput = e.target.value;
    this.setState({
      localInput: newInput,
    });
  }
  handleNewSubmit(e) {
    e.preventDefault();
    this.props.httpPatch({
      id: this.props.id,
      localInput: this.state.localInput,
      status: '',
      createDate: '',
    });
  }
  handleDeleteClick(e) {
    e.preventDefault();
    console.log(e.target);
    this.props.httpDelete(e.target.value);
  }
  render() {
    const ids = Object.keys(this.props.items);
    const itemElements = ids.map((id, idx) => {
      const item = this.props.items[id];
      return (
        <li key={idx} id={item.id} className="li-item">
          <form>
            <input
              value={item.Input}
              onChange={this.handleEditofInput}
              className="to-do-item"
            />
            <input
              name="task"
              type="submit"
              value="Done"
            />
            <button
              name="note"
              type="submit"
              value={item.id}
              onClick={this.handleDeleteClick}
            >Delete</button>
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

ToDoList.propTypes = propTypes;
export default ToDoList;
