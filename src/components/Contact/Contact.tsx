import React, { Component } from 'react';
import './Contact.css'
import Button from '../Button/Button'
interface ContactProps {}

class Contact extends Component<ContactProps, {}> {
  render() {
    return (
      <div id="contact" className="contact">
        <div className="content">
          <div className="header">Any questions?</div>
          {/* <div className="copy">Let's connect</div> */}
          <a href="mailto:welcome.transpose@gmail.com">
            <Button className="red" name="Contact" handleClick={()=> true} />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
