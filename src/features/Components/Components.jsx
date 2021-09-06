import React from 'react';
import {NavLink, Redirect, Route, Switch} from 'react-router-dom';
import {componentsPath, mainPath} from '../../helpers/const';
import ButtonMUIExample from './Examples/ButtonMUIExample';
import PaginationExample from './Examples/PaginationExample';
import NotFoundExample from './Examples/NotFoundExample';
import DialogMUIExample from './Examples/DialogMUIExample';

import './Components.scss';

const Components = () => {
  return (
    <main className='components page-wrap'>
      <nav className='components__nav'>
        <NavLink className='components__nav-link' to={componentsPath.buttonMUI}>
          ButtonMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.dialogMUI}>
          DialogMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.iconButtonMUI}>
          IconButtonMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.inputMUI}>
          InputMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.loaderMUI}>
          LoaderMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.notFound}>
          NotFound
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.pagination}>
          Pagination
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.popperMUI}>
          PopperMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.reCaptchaV2}>
          ReCaptchaV2
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.selectComponent}>
          SelectComponent
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.skeletonMUI}>
          SkeletonMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.snackbarMUI}>
          SnackbarMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.tooltipMUI}>
          TooltipMUI
        </NavLink>
        <NavLink className='components__nav-link' to={componentsPath.transitionedBlock}>
          TransitionedBlock
        </NavLink>
      </nav>

      <div className='components__content p-30'>
        <Switch>
          <Redirect from={mainPath.components} exact to={componentsPath.buttonMUI} />
          <Route path={componentsPath.buttonMUI} component={ButtonMUIExample} />
          <Route path={componentsPath.dialogMUI} component={DialogMUIExample} />
          <Route path={componentsPath.notFound} component={NotFoundExample} />
          <Route path={componentsPath.pagination} component={PaginationExample} />
        </Switch>
      </div>
    </main>
  );
};

export default Components;
