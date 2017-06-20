import React from 'react'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'

import 'node_modules/animate.css/animate.css'
import 'node_modules/font-awesome/scss/font-awesome.scss'
import 'static/scss/gatsrap.scss'
import 'static/scss/postcard.scss'

import 'highlight.js'
import { config } from 'config'
import SiteNavi from '../components/SiteNavi'
import JournalNavi from '../components/JournalNavi'


class Template extends React.Component {
    render() {
        const {location, children} = this.props;
        if(location.pathname === '/'){
            return (
                <div className="teal-bg">
                  { children }
                </div>
            );
        }
        if(location.pathname === '/about/'){
            return (
                <div>
                  <SiteNavi title={ config.siteTitle } {...this.props}/>
                  { children }
                </div>
            );
        }
        // if (location.pathname !== prefixLink('/')) {
            return (
                <div>
                  <JournalNavi title={ config.siteTitle } {...this.props}/>
                  { children }
                </div>
            );
        // }
        // else return false;
    }

    componentDidMount() {
        const WOW = require('wowjs');
        this.wow = new WOW.WOW()
        this.wow.init()
    }

    componentDidUpdate() {
        this.wow.sync()
    }

}

Template.propTypes = {
    children: React.PropTypes.any,
    location: React.PropTypes.object,
    route: React.PropTypes.object,
}

export default Template
