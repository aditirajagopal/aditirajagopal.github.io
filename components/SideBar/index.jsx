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
                    { this.props.title }
                </h1>
                <p className="subtitle">
                Lists, plot-twists, ideas, updates, and maybe the beginnings of a novel. All by yours truly @aditi_rajagopal
                </p>
              <p className="copyright">
                &copy; All rights reserved.
              </p>
            </div>
        </div>
    );
  }
}

Sidebar.propTypes = {
    title: React.PropTypes.string.isRequired,
};

export default Sidebar;
