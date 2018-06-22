// cross-fetch is recommended to use, since most browsers does not support
// fetch natively.
// https://redux.js.org/advanced/async-actions
import fetch from "cross-fetch";

const getApiUrl = () => {
  const browser_url = window.location.href;
  if (browser_url.includes("localhost:3000")) {
    return "https://localhost:3001";
  } else if (
    browser_url.browser_url.includes("cornucopia-frontend.herokuapp.com")
  ) {
    return "https://cornucopia-backend.herokuapp.com";
  }
};

const post = (path, body) =>
  fetch(`https://localhost:3001${path}`, {
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(body),
    cache: "default", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "omit", // include, same-origin, *omit
    headers: {
      "user-agent": "CornucopiaTrader/1.0",
      // CHECK AGAIN !!!!!!!!
      "content-type": "application/json" // ; charset=utf-8
    },
    method: "POST",
    // DOUBLE-CHECK IF CORS IS OK
    mode: "cors", // no-cors, cors, *same-origin
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer" // *client, no-referrer
  })
    .then(function(res) {
      if (res.ok) {
        return res.json();
      }
      throw new Error({
        error: {
          message:
            "Network response was not ok. Something went wrong with the backend."
        }
      }); // why do I need this it does go to catch==
    })
    .catch(function(error) {
      return {
        error: { message: error.message + ". Check that server is running." }
      };
    });

const simulate = body => post("/simulate", body);
export { simulate };
