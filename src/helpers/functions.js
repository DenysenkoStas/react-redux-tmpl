import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import dayjs from 'dayjs';

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

export const generateId = () => Math.floor(Math.random() * Date.now());

export const randomInteger = (max) => Math.floor(Math.random() * (max + 1));

export const randomRgbColor = () => {
  let r = randomInteger(255);
  let g = randomInteger(255);
  let b = randomInteger(255);
  return `rgb(${r}, ${g}, ${b})`;
};

export const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const dateForQuery = (date) => encodeURIComponent(date?.toISOString().replace('.000Z', ''));

export const formatNumber = (value) =>
  Number(value)
    .toLocaleString('fr', {
      maximumFractionDigits: 2
    })
    .replace(',', '.');

export const isNegative = (num) => Math.sign(num) === -1;

export const capitalize = (string) =>
  typeof string === 'string' ? string.charAt(0).toUpperCase() + string.slice(1) : '';

export const objectToQueryString = (queryParams) => {
  return queryParams
    ? Object.entries(queryParams).reduce((queryString, [key, value]) => {
        const symbol = queryString.length === 0 ? '?' : '&';
        queryString +=
          (value || value === 0) && (typeof value === 'string' || typeof value === 'number')
            ? `${symbol}${key}=${encodeURIComponent(value)}`
            : '';
        return queryString;
      }, '')
    : '';
};

export const scrollToElement = (ref) => ref && ref.current.scrollIntoView({behavior: 'smooth'});

export const classList = (...classes) => classes.filter((item) => !!item).join(' ');

export const formatDate = (date, template = 'DD.MM.YYYY') => (date ? dayjs(date).format(template) : '-');

export const isDataArray = (array, minLength = 1) => Array.isArray(array) && array.length >= minLength;

export const calculatePercent = (value, total, digits = 2) => Number(((value / total) * 100).toFixed(digits));

export const getRandomItem = (array) => isDataArray(array) && array[Math.floor(Math.random() * array.length)];

export const removeDuplicates = (array) => isDataArray(array) && [...new Set(array)];

export const sortBy = (array, key) =>
  isDataArray(array) && array.sort((a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0));

export const isEqual = (first, second) => !!(first && second) && JSON.stringify(first) === JSON.stringify(second);

export const countOccurrences = (array, value) =>
  isDataArray(array) &&
  array.reduce((accumulator, currentValue) => (currentValue === value ? accumulator + 1 : accumulator), 0);

export const wait = async (milliseconds = 500) => new Promise((resolve) => setTimeout(resolve, milliseconds));

const pluck = (array, key) => isDataArray(array) && array.filter((object) => object[key]).map((object) => object[key]);

const insert = (array, index, newItem) =>
  isDataArray(array) && typeof index === 'number' && [...array.slice(0, index), newItem, ...array.slice(index)];
