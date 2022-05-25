import React from 'react';
import location from '../../assets/icon/location.png';
import mail from '../../assets/icon/mail.png';
import person from '../../assets/icon/person.png';
import './Footer.css';

const Footer = () => {
    return (
        <div className="Footer-part">
        <div className='details-part'>
          <h2 className="laptop">Laptop</h2>
          <p className="Person">
            <img src={person} alt="location icon" /> Mr. Sazzad
          </p>
          <p className="location">
            <img src={location} alt="location icon" /> Gopalgonj dhaka Bangladish
          </p>
          <p className="mail">
            <img src={mail} alt="mail icon" /> main.sazzad@ gmail.com
          </p>
        </div>
        <div className="copyright">@copyright &copy;2022 @laptop all right reserved</div>
      </div>
    );
};

export default Footer;