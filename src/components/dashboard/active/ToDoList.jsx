import React, { Component } from 'react';
import Input from './Input.jsx';

const ToDoList = (props) => {
  const ids = Object.keys(props.items);
  const itemElements = ids.map((id, idx) => {
    const item = props.items[id];
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
};

// class ToDoList extends Component {
//   render() {
//     const itemElements = props.items.map((item, idx) => {
//       return (
//         <li key={idx}>
//           <Input
//             item={item.localInput}
//           />
//         </li>
//       );
//     });
//     return (
//       <ul>
//         {itemElements}
//       </ul>
//     );
//   }
// }

export default ToDoList;
