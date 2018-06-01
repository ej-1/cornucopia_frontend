//jest.mock("../services/api");

import * as user from "../services/user";

// The assertion for a promise must be returned.
it("works with promises", () => {
  expect.assertions(1);
  //return user.getUserName(4).then(data => expect(data).toEqual("Mark"));
});
