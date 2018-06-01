// request.js
const http = require("http");
/*
const request = () => {
  return 88888888;
  
  return new Promise(resolve => {
    // This is an example of an http request, for example to fetch
    // user data from an API.
    // This module is being mocked in __mocks__/request.js
    http.get({ path: url }, response => {
      let data = "";
      response.on("data", _data => (data += _data));
      response.on("end", () => resolve(data));
    });
  });
  
};

export { request };

*/
const users = {
  4: { name: "Mark" },
  5: { name: "Paul" }
};

const request = url => {
  return new Promise((resolve, reject) => {
    const userID = parseInt(url.substr("/users/".length), 10);
    process.nextTick(
      () =>
        users[userID]
          ? resolve(users[userID])
          : reject({
              error: "User with " + userID + " not found."
            })
    );
  });
};

export { request };
