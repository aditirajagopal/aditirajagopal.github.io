import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import './style.css'

class SiteNavi extends React.Component {
  render () {
    const { location } = this.props
    const { title } = this.props
    return (
      <nav className="navbar sticky-top navbar-toggleable-sm navbar-inverse bg-danger">
        <button className="navbar-toggler navbar-toggler-right collapsed" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="container">
          <Link className="text-center" to={prefixLink('/')}><h1 className="navbar-brand mb-0">{title}</h1></Link>
          <div className="navbar-collapse collapse" id="navbarColor02" aria-expanded="false">
            <ul className="navbar-nav mr-auto">
              <li className={location.pathname === prefixLink('/about/') ? 'nav-item active' : 'nav-item'}>
                <Link to={prefixLink('/about/')} className="nav-link">about</Link>
              </li>
              <li className={location.pathname === prefixLink('/Journal/') ? 'nav-item active' : 'nav-item'}>
                <Link to={prefixLink('/journal/')} className="nav-link">journal</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  elsewhere on the internet
                </a>
                <div className="dropdown-menu bg-danger" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="https://twitter.com/aditi_rajagopal" target="_blank">Twitter</a>
                  <a className="dropdown-item" href="https://www.linkedin.com/in/aditirajagopal/" target="_blank">LinkedIn</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    )
  }
}

SiteNavi.propTypes = {
  location: React.PropTypes.object,
}

export default SiteNavi
