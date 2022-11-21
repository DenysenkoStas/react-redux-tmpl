import React from 'react';
import {NavLink} from 'react-router-dom';
import {mainPath} from '../../routes/paths';
import linkedinIcon from '../../assets/icons/linkedin.svg';
import facebookIcon from '../../assets/icons/facebook.svg';
import instagramIcon from '../../assets/icons/instagram.svg';
import twitterIcon from '../../assets/icons/twitter.svg';
import styles from './Footer.module.scss';

const navLinks = [
  {path: mainPath.examples.path, name: mainPath.examples.name, strict: true},
  {path: mainPath.navLink.path, name: mainPath.navLink.name}
];

const infoLinks = [
  {path: mainPath.navLink.path, name: 'Help center'},
  {path: mainPath.navLink.path, name: 'About'}
];

const socialLinks = [
  {path: 'https://www.linkedin.com/', name: 'Linkedin', icon: linkedinIcon},
  {path: 'https://www.facebook.com/', name: 'Facebook', icon: facebookIcon},
  {path: 'https://www.instagram.com/', name: 'Instagram', icon: instagramIcon},
  {path: 'https://twitter.com/', name: 'Twitter', icon: twitterIcon}
];

const Footer = () => {
  return (
    <footer className={styles.root}>
      <div className={`${styles.container} container`}>
        {navLinks?.length > 0 && (
          <nav className={styles.nav}>
            {navLinks?.map(({path, name, strict}) => (
              <NavLink key={name} className={styles.link} to={path} strict={strict}>
                {name}
              </NavLink>
            ))}
          </nav>
        )}

        {infoLinks?.length > 0 && (
          <div className={styles.info}>
            {infoLinks?.map(({path, name}) => (
              <NavLink key={name} className={styles.link} to={path}>
                {name}
              </NavLink>
            ))}
          </div>
        )}

        {socialLinks?.length > 0 && (
          <ul className={styles.socials}>
            {socialLinks?.map(({path, name, icon}) => (
              <li key={name} className={styles.socialItem}>
                <a
                  className={styles.socialLink}
                  href={path}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={name}
                >
                  <img className={styles.socialIcon} src={icon} alt={name} />
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </footer>
  );
};

export default Footer;
