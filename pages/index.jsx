import React from 'react'
import ReactCardFlip from 'react-card-flip';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Helmet from 'react-helmet'
import { config } from 'config'

const timeTillKickoff = kickOff => {
    const countDown = kickOff.getTime()- Date.now();
    var _second = 1000;
    var _minute = _second * 60;
    var _hour = _minute * 60;
    var _day = _hour * 24;
    var timer;

    var days = Math.floor(countDown / _day);
    var hours = Math.floor((countDown % _day) / _hour);
    var minutes = Math.floor((countDown % _hour) / _minute);

    const TimeTillKickoff = `${days} days, ${hours} hours, ${minutes} minutes`

    return TimeTillKickoff;
}

class Index extends React.Component {
  constructor() {
    super();
    this.state = {
      isFlipped: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    event.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  }

  render() {
    const date = <p className="date">May 26th 2017</p>
    const greeting = <h3 className="greeting">Hello!</h3>
    const kickOff = timeTillKickoff(new Date('09/02/2017 2:30 PM'));



    const bio =
      <div>
        <p>My name is Aditi Rajagopal. I'm a developer/software engineer, freelancer, and diehard Michigan Wolverine (only {kickOff} till kickoff).</p>

        <p>I currently work at IBM on the Bluemix Container Service on the UI/UX team. Oh, and I'm also the newly elected treasurer of SWE (Society of Women Engineers) Minnesota, the largest professional section in the country.</p>

        <p>I've given talks at SWE conferences and at my alma mater. I occasionally take on freelance projects, so feel free to get in touch if you want to collaborate on something fun and exciting. If you are a recruiter, please review my FAQ before reaching out.</p>

        <p>Take a look around. Try not to break anything.</p>
      </div>;

    const signature = 
      <div className="signature"> Aditi
      </div>

    return (
      <div className="postcard">
        <ReactCardFlip isFlipped={this.state.isFlipped}>
          <div className="cardfront" key="front">
            <button className="flipCard" onClick={this.handleClick}>
              Flip Card
            </button>

          </div>

          <div className="cardback" key="back">
            <Grid columns={12} style={{height: '100%'}}>
              <Breakpoint minWidth={900} widthMethod="componentWidth" style={{height: 'inherit'}}>
                <Span columns={6} last>
                <div className="stamp">
                  <img src="https://yt3.ggpht.com/-vspzxUWDUZw/AAAAAAAAAAI/AAAAAAAAAAA/vU3exVXSsXs/s900-c-k-no-mo-rj-c0xffffff/photo.jpg" />
                </div>
                  <div className="cardcontent">
                    <ul className="homeNav">
                      <li className="home_nav">
                        <Link to={prefixLink('/')}>Home</Link>
                      </li>
                      <li className="home_nav">
                        <Link to={prefixLink('/about/')}>About</Link>
                      </li>
                      <li className="home_nav">
                        <Link to={prefixLink('/journal/')}>Journal</Link>
                      </li>
                      <li className="home_nav">
                        <a href="https://www.linkedin.com/in/aditirajagopal/" target="_blank">Linkedin</a>
                      </li>
                      <li className="home_nav">
                        <a href="https://twitter.com/aditi_rajagopal" target="_blank">Twitter</a>
                      </li>
                    </ul>
                  </div>
                </Span>
                <Span columns={6}>
                  <div className="cardcontent">
                  { date}
                  { greeting }
                  { bio }
                  { signature }
                </div>
                </Span>
              </Breakpoint>
              <Breakpoint maxWidth={900} widthMethod="componentWidth">
                <div className="cardcontent">
                  { date}
                  { greeting }
                  { bio }
                  { signature }
                </div>
                <div className="cardcontent">
                  <ul className="homeNav">
                    <li className="home_nav">
                      <Link to='/about/'>About</Link>
                    </li>
                    <li className="home_nav">
                      <Link to={prefixLink('/articles/')}>Journal</Link>
                    </li>
                    <li className="home_nav">
                      <Link to='/portfolio/'>Portfolio</Link>
                    </li>
                    <li className="home_nav">
                      <a href="https://www.linkedin.com/in/aditirajagopal/" target="_blank">Linkedin</a>
                    </li>
                    <li className="home_nav">
                      <a href="https://twitter.com/aditi_rajagopal" target="_blank">Twitter</a>
                    </li>
                  </ul>
                </div>
              </Breakpoint>
            </Grid>

            <button className="flipCard" onClick={this.handleClick}>
              Flip Card
            </button>

          </div>
        </ReactCardFlip>
      </div>
    );
  }
}

export default Index;