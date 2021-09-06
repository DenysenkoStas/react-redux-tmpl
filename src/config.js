let BASE_URL, SECOND_URL;

const host = window.location.host;

if (host.includes('localhost') || host === process.env.REACT_APP_DOMAIN_URL) {
  BASE_URL = process.env.REACT_APP_API_URL;
} else {
  BASE_URL = process.env.REACT_APP_API_URL;
}

SECOND_URL = '';

export const API_BASE_URL = BASE_URL;
export const API_SECOND_URL = SECOND_URL;
