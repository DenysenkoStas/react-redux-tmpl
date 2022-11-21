import {useCallback, useState} from 'react';
import {useLocation} from 'react-router-dom';

export const useQueryParams = () => new URLSearchParams(useLocation().search);

export const useToggle = (initialState = false) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), []);
  return [state, toggle];
};

export const useCurrentPageName = (pathsObj) => {
  const currentPath = useLocation()?.pathname;
  let name = '';

  if (typeof pathsObj === 'object') {
    Object?.values(pathsObj)?.find((obj) => {
      if (obj?.path === currentPath) name = obj?.name || '';
    });
  }
  return name;
};
