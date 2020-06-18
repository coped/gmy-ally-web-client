import Api from "lib/api";
import { server } from "tests/server.js";
import { mockUsers } from "server-handlers";

// Setup mock server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("api", () => {
  const user = mockUsers[0];
  describe("login", () => {
    it("logs user in", async () => {
      const info = {
        email: user.email,
        password: user.password,
      };
      const data = await Api.login({ info });
      expect(data.status).toEqual("success");
      expect(data.payload.jwt).toBeTruthy();
      expect(data.payload.user).toBeTruthy();
    });
    it("handles api errors from bad requests", async () => {
      const data = await Api.login({ info: { email: user.email } });
      expect(data.status).toEqual("error");
      expect(data.messages).toBeTruthy();
    });
  });
  describe("showUser", () => {
    it("retrieves user information", async () => {
      const data = await Api.showUser({
        id: user.id,
        authorization: user.jwt,
      });
      expect(data.status).toEqual("success");
      expect(data.payload.user).toBeTruthy();
    });
  });
  // describe("createUser and destroyUser", () => {
  //   it("signs up the user", async () => {
  //     const info = {
  //       name: mockUser.name,
  //       email: mockUser.email,
  //       password: mockUser.password,
  //       password_confirmation: mockUser.password,
  //     };
  //     const data = await Api.createUser({ info });
  //     expect(data.status).toEqual("success");
  //     expect(data.payload.jwt).toBeTruthy();
  //     expect(data.payload.user).toBeTruthy();
  //   });
  //   it("deletes the user", async () => {
  //     // Delete user
  //     const response = await Api.destroyUser({
  //       id: userID,
  //       authorization: userJWT,
  //     });
  //     expect(response.status).toEqual("success");
  //   });
});
