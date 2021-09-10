import React from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import {componentsPath, mainPath} from '../../helpers/const';

import './Components.scss';

const Components = () => {
  return (
    <main className='components page-wrap'>
      <nav className='components__nav'>
        {componentsPath.map(({path, name}, key) => (
          <NavLink key={key} className='components__nav-link' to={path}>
            {name}
          </NavLink>
        ))}
      </nav>

      <div className='components__content p-30'>
        <Switch>
          <Redirect from={mainPath.components} exact to={componentsPath[0].path} />
          {componentsPath.map(({path, component}, key) => (
            <Route key={key} path={path} component={component} />
          ))}
        </Switch>
      </div>
    </main>
  );
};

export default Components;
