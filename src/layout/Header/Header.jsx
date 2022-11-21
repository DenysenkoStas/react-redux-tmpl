import React from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import {authPath, mainPath} from '../../routes/paths';
import logoImg from '../../assets/images/logo.svg';
import {ReactComponent as PlusIcon} from '../../assets/icons/plus.svg';
import {ReactComponent as FolderIcon} from '../../assets/icons/folder.svg';
import {ReactComponent as BoxIcon} from '../../assets/icons/box.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';
import styles from './Header.module.scss';

const navLinks = [
  {
    path: mainPath.dashboard.path,
    name: mainPath.dashboard.name,
    icon: <PlusIcon className={styles.icon} />
  },
  {
    path: mainPath.examples.path,
    name: mainPath.examples.name,
    icon: <BoxIcon className={styles.icon} />,
    strict: true
  },
  {
    path: mainPath.navLink.path,
    name: mainPath.navLink.name,
    icon: <FolderIcon className={styles.icon} />
  }
];

const Header = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push(authPath.signIn.path);
  };

  return (
    <header className={styles.root}>
      <div className={`${styles.container} container`}>
        <Link className='good-hover my-auto' to={mainPath.dashboard.path}>
          <img className={styles.logo} src={logoImg} alt='Logo' />
        </Link>

        {navLinks?.length > 0 && (
          <nav className={styles.nav}>
            {navLinks?.map(({path, name, strict, icon}) => (
              <NavLink key={name} className={styles.navLink} to={path} strict={strict}>
                {icon} {name}
              </NavLink>
            ))}
          </nav>
        )}

        <div className={`${styles.user} my-auto`}>
          <span className={styles.userName}>User Name</span>
          <span className={styles.userMail}>email@email.com</span>
        </div>
        <button className={`${styles.logout} my-auto`} type='button' aria-label='Logout button' onClick={logout}>
          <LogoutIcon className={styles.icon} />
        </button>
      </div>
    </header>
  );
};

export default Header;
