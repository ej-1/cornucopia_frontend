//user.test.js
const getUserName = () => {
  console.log("REQUEST ACTIVATED");
};
export { getUserName };

//user.test.js
import { user } from "../services/user";

// The assertion for a promise must be returned.
it("works with promises", () => {
  expect.assertions(1);
  //return user.getUserName(4).then(data => expect(data).toEqual("Mark"));
  user();
});
