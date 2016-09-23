import React from 'react';
import { withRouter, Link } from 'react-router';

// const propTypes = {
//   activeHandler: React.PropTypes.function,
//   snoozeHandler: React.PropTypes.function,
//   archiveHandler: React.PropTypes.function,
// };

const Menu = ({ activeHandler,
                snoozeHandler,
                archiveHandler,
              }) => {
  return (
    <div id="menu-icons">
      <Link to="/:active" onClick={activeHandler}>
        <img
          id="home-icon"
          className="icons"
          role="presentation"
        />
      </Link>
      <Link to="/:snooze" onClick={snoozeHandler}>
        <img
          id="snooze-icon"
          className="icons"
          role="presentation"
        />
      </Link>
      <Link to="/:archive" onClick={archiveHandler}>
        <img
          id="archive-icon"
          className="icons"
          role="presentation"
        />
      </Link>
    </div>
  );
};

// Menu.propTypes = propTypes;

export default withRouter(Menu);
