import React from 'react';
import {NavLink} from 'react-router-dom';
import {mainPath} from '../../routes/paths';

import './Footer.scss';

import {ReactComponent as LinkedinIcon} from '../../assets/icons/linkedin.svg';
import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg';
import {ReactComponent as InstagramIcon} from '../../assets/icons/instagram.svg';
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__container container'>
        <nav className='footer__nav'>
          <NavLink className='footer__link' to={mainPath.examples} strict>
            Examples
          </NavLink>
          <NavLink className='footer__link' to={mainPath.navLink}>
            Nav link
          </NavLink>
        </nav>

        <div className='footer__info'>
          <NavLink className='footer__link' to={mainPath.navLink2}>
            Help center
          </NavLink>
          <NavLink className='footer__link' to={mainPath.navLink3}>
            About
          </NavLink>
        </div>

        <ul className='footer__socials'>
          <li className='social-item'>
            <a
              className='social-item__link'
              href='https://www.linkedin.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Linkedin'
            >
              <LinkedinIcon className='social-item__icon' />
            </a>
          </li>
          <li className='social-item'>
            <a
              className='social-item__link'
              href='https://www.facebook.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Facebook'
            >
              <FacebookIcon className='social-item__icon' />
            </a>
          </li>
          <li className='social-item'>
            <a
              className='social-item__link'
              href='https://www.instagram.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Instagram'
            >
              <InstagramIcon className='social-item__icon' />
            </a>
          </li>
          <li className='social-item'>
            <a
              className='social-item__link'
              href='https://twitter.com/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='Twitter'
            >
              <TwitterIcon className='social-item__icon' />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
