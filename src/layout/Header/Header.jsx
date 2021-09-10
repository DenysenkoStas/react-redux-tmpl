import React from 'react';
import {Link, NavLink, useHistory} from 'react-router-dom';
import {authPath, mainPath} from '../../helpers/const';

import './Header.scss';

import {ReactComponent as HeaderLogo} from '../../assets/images/logo.svg';
import {ReactComponent as PlusIcon} from '../../assets/icons/plus.svg';
import {ReactComponent as FolderIcon} from '../../assets/icons/folder.svg';
import {ReactComponent as BoxIcon} from '../../assets/icons/box.svg';
import {ReactComponent as LogoutIcon} from '../../assets/icons/logout.svg';

const Header = () => {
  const history = useHistory();

  const logout = () => {
    localStorage.removeItem('token');
    history.push(authPath.signIn);
  };

  return (
    <header className='header'>
      <div className='header__container container'>
        <Link className='good-hover my-auto' to={mainPath.dashboard}>
          <HeaderLogo className='header__logo' />
        </Link>
        <nav className='header__nav'>
          <NavLink className='header__nav-link' to={mainPath.dashboard}>
            <PlusIcon className='header__icon' />
            Dashboard
          </NavLink>
          <NavLink className='header__nav-link' to={mainPath.components} strict>
            <BoxIcon className='header__icon' />
            Components
          </NavLink>
          <NavLink className='header__nav-link' to={mainPath.navLink}>
            <FolderIcon className='header__icon' />
            Nav link
          </NavLink>
        </nav>

        <div className='header__user-info my-auto'>
          <span className='header__user-name'>User Name</span>
          <span className='header__user-mail'>email@email.com</span>
        </div>
        <button className='header__logout my-auto' aria-label='Logout button' onClick={logout}>
          <LogoutIcon className='header__icon' />
        </button>
      </div>
    </header>
  );
};

export default Header;
