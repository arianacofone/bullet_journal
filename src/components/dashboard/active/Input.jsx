import React from 'react';

const Input = () => {
  return (
    <div>
      <h3>Input Form</h3>
      <form className="post-display">
        <input
          type="text"
          name="todo"
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
};

export default Input;
