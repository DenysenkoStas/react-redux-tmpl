import React, {Fragment} from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import {examplesPath, mainPath} from '../../routes/paths';
import {useCurrentPageName} from '../../helpers/hooks';
import styles from './Examples.module.scss';

export const ExampleLayout = ({propsList = '', children}) => {
  const title = useCurrentPageName(examplesPath);

  if (!children) return null;
  return (
    <Fragment>
      {title && <h2 className='mb-16'>{title}</h2>}
      <section className='card-wrap'>
        {propsList && (
          <p className='mb-24'>
            <b>Props:</b> {propsList}
          </p>
        )}
        {children}
      </section>
    </Fragment>
  );
};

const Examples = () => {
  const examplesData = Object.values(examplesPath);

  if (!examplesData) return null;
  return (
    <main className={`${styles.root} page-wrap`}>
      <nav className={styles.nav}>
        {examplesData?.map(({path, name}) => (
          <NavLink key={name} className={styles.navLink} to={path}>
            {name}
          </NavLink>
        ))}
      </nav>

      <div className={styles.content}>
        <Switch>
          <Redirect from={mainPath.examples.path} exact to={examplesPath.accordionMUI.path} />
          {examplesData?.map(({path, name, component}) => (
            <Route key={name} path={path} component={component} />
          ))}
        </Switch>
      </div>
    </main>
  );
};

export default Examples;
