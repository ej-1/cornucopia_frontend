let backendHost;
//const apiVersion = 'v1';

const browser_url = window && window.location && window.location.hostname;
if (browser_url.includes("localhost")) {
  backendHost = "http://localhost:3001";
} else if (browser_url.includes("cornucopia-frontend.herokuapp.com")) {
  backendHost = "https://cornucopia-backend.herokuapp.com";
} else {
  backendHost = process.env.REACT_APP_BACKEND_HOST || "http://localhost:8080";
}

export const API_ROOT = `${backendHost}`; // /api/${apiVersion}`;
