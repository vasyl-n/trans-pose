import React, { Component } from 'react';
import './Footer.css'

interface FooterProps {}

class Footer extends Component<FooterProps, {}> {
  render() {
    return (
      <div className="Footer">
        <div className="links">
          <a href="https://github.com/vasyl-n/trans-pose">Check it out on Github</a>
        </div>
      </div>
    );
  }
}

export default Footer;
