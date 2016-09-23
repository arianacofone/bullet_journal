// This document will render the active list components
import React from 'react';
import { withRouter } from 'react-router';
import Input from 'Input.jsx';

const Active = () => {
  return (
    <div>
      <h3>ACTIVE</h3>
      <Input />
    </div>
    );
};

export default withRouter(Active);
