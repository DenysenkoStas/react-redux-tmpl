import React from 'react';
import {Link} from 'react-router-dom';
import {authPath} from '../../routes/paths';
import logoImg from '../../assets/images/logo.svg';
import styles from './SideBg.module.scss';

const SideBg = () => {
  return (
    <div className={styles.root}>
      <Link className='good-hover' to={authPath.signIn.path}>
        <img className={styles.logo} src={logoImg} alt='Logo' />
      </Link>
    </div>
  );
};

export default SideBg;
