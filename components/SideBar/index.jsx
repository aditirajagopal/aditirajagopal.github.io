import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { config } from 'config';

import './style.css'

class Sidebar extends React.Component {
  render() {
    return (
        <div className="sidebar col-md-4">
            <div className="sidebar-content">
                <h1 className="sidebar-header">
                    Journal
                </h1>
                <p class="subtitle">
                Lists, plot-twists, ideas, updates, and maybe the beginnings of a novel. All by yours truly @aditi_rajagopal
                </p>
                <ul className="sidebar-nav">
                    <li>
                        <Link to={prefixLink('/')}>Home</Link>
                    </li>
                    <li>
                        <Link to={prefixLink('/about/')}>About</Link>
                    </li>
                    <li>
                        <Link to={prefixLink('/journal/')}>Journal</Link>
                    </li>
                    <li>
                        <Link to={prefixLink('/portfolio/')}>Portfolio</Link>
                    </li>
                </ul>
              <p className="copyright">
                &copy; All rights reserved.
              </p>
            </div>
        </div>
    );
  }
}

Sidebar.propTypes = {
  location: React.PropTypes.object,
};

export default Sidebar;
