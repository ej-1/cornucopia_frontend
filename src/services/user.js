// user.js
import * as request from "../services/request";

const getUserName = userID => {
  //console.log(request());
  //return request.request();
  return request.request("/users/" + userID).then(user => user.name);
};

export { getUserName };
