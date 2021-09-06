import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

export const joinQueries = (arr) => `${arr.length && arr.length !== 0 ? '?' : ''}${arr.join('&')}`;

export function getOption(label) {
  return (
    <div className={`status ${label}`}>
      <div>
        {label !== 'All networks' && <span />}
        {label}
      </div>
    </div>
  );
}

export function splitByCommas(data) {
  return data.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// Scroll Restoration
export function ScrollToTop() {
  const {pathname} = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

// Convert string to slug
export function stringToSlug(str) {
  str = str.replace(/^\s+|\s+$/g, ''); // trim
  str = str.toLowerCase();

  // remove accents, swap ñ for n, etc
  let from = 'åàáãäâèéëêìíïîòóöôùúüûñç·/_,:;';
  let to = 'aaaaaaeeeeiiiioooouuuunc------';

  for (let i = 0, l = from.length; i < l; i++) {
    str = str.replace(new RegExp(from.charAt(i), 'g'), to.charAt(i));
  }

  str = str
    .replace(/[^a-z0-9 -]/g, '') // remove invalid chars
    .replace(/\s+/g, '-') // collapse whitespace and replace by -
    .replace(/-+/g, '-') // collapse dashes
    .replace(/^-+/, '') // trim - from start of text
    .replace(/-+$/, ''); // trim - from end of text

  return str;
}
