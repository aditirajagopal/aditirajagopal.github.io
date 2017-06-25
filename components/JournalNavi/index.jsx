import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class JournalNavi extends React.Component {
  render () {
    const { location } = this.props
    const { title } = this.props
    return (
      <nav className="navbar navbar-toggleable-sm navbar-inverse bg-danger jheader">
        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="j_container">
          <Link className="text-center" to={prefixLink('/')}><h1 className="navbar-brand mb-0">{title}</h1></Link>
          <div className="navbar-collapse collapse" id="navbarColor02" aria-expanded="false">
            <ul className="navbar-nav mr-auto">
              <li className={location.pathname === prefixLink('/about/') ? 'nav-item active' : 'nav-item'}>
                <Link to={prefixLink('/about/')} className="nav-link">about</Link>
              </li>
              <li className={location.pathname === prefixLink('/journal/') ? 'nav-item active' : 'nav-item'}>
                <Link to={prefixLink('/journal/')} className="nav-link">journal</Link>
              </li>
              <li className={location.pathname === prefixLink('/portfolio/') ? 'nav-item active' : 'nav-item'}>
                <Link to={prefixLink('/portfolio/')} className="nav-link">portfolio</Link>
              </li>
              <li className="twitter">
                <a className="nav-link nav-item" href="https://twitter.com/aditi_rajagopal" target="_blank"><i className="fa fa-twitter-square" aria-hidden="true"></i></a>
              </li>
              <li className="linkedin">
                <a className="nav-link nav-item" href="https://www.linkedin.com/in/aditirajagopal/" target="_blank"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

JournalNavi.propTypes = {
  location: React.PropTypes.object,
}

export default JournalNavi
