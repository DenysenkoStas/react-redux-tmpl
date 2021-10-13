import React from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import {examplesPath, mainPath} from '../../routes/paths';

import './Examples.scss';

const Examples = () => {
  return (
    <main className='examples page-wrap'>
      <nav className='examples__nav'>
        {examplesPath.map(({path, name}, key) => (
          <NavLink key={key} className='examples__nav-link' to={path}>
            {name}
          </NavLink>
        ))}
      </nav>

      <div className='examples__content p-30'>
        <Switch>
          <Redirect from={mainPath.examples} exact to={examplesPath[0].path} />
          {examplesPath.map(({path, component}, key) => (
            <Route key={key} path={path} component={component} />
          ))}
        </Switch>
      </div>
    </main>
  );
};

export default Examples;
