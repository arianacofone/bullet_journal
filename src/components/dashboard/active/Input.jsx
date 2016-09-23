import React from 'react';

const Input = () => {
  return (
    <div>
      <h3>Input Form</h3>
      <form className="post-display">
        <input
          type="text"
          name="author"
          value="text"
        />
        <input
          type="submit"
          value="task"
        />
      </form>
    </div>
    );
};

export default Input;
