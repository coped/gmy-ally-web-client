import Api from "lib/api";

// These tests require a running version of back-end API on local machine.
// Refactor these tests to use mock as soon as possible.
describe("api", () => {
  const userData = {
    email: "first@user.com",
    password: "foobar",
  };
  describe("login", () => {
    it("performs login request", async () => {
      const info = {
        email: userData.email,
        password: userData.password,
      };
      const data = await Api.login({ info });
      expect(data.status).toEqual("success");
      expect(data.payload.jwt).toBeTruthy();
    });

    it("handles api errors from bad requests", async () => {
      const data = await Api.login({ info: { email: userData.email } });
      expect(data.status).toEqual("error");
      expect(data.messages).toBeTruthy();
    });
  });
  describe("createUser and destroyUser", () => {
    let userID;
    let userJWT;
    const user = {
      name: "name",
      email: "someTest@user.com",
      password: "foobar",
      password_confirmation: "foobar",
    };
    it("signs up the user", async () => {
      const data = await Api.createUser({ info: user });
      userJWT = data.payload.jwt;
      userID = data.payload.user.id;
      expect(data.status).toEqual("success");
    });
    it("deletes the user", async () => {
      // Delete user
      const response = await Api.destroyUser({
        id: userID,
        authorization: userJWT,
      });
      expect(response.status).toEqual("success");
    });
  });
});
