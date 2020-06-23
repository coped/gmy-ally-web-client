import { Api } from "lib/api";
import { server } from "tests/server.js";
import { mockUsers } from "server-handlers";

// Setup mock server
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("api", () => {
  describe("login", () => {
    const { mockUser } = mockUsers;
    it("logs user in", async () => {
      const info = {
        email: mockUser.email,
        password: mockUser.password,
      };
      const data = await Api.login({ info });
      expect(data.status).toEqual("success");
      expect(data.payload.jwt).toBeTruthy();
      expect(data.payload.user).toBeTruthy();
    });
    it("handles api errors from bad requests", async () => {
      const data = await Api.login({ info: { email: mockUser.email } });
      expect(data.status).toEqual("error");
      expect(data.messages).toBeTruthy();
    });
  });
  describe("showUser", () => {
    const { mockUser } = mockUsers;
    it("retrieves user information", async () => {
      const data = await Api.showUser({
        id: mockUser.id,
        authorization: mockUser.jwt,
      });
      expect(data.status).toEqual("success");
      expect(data.payload.user).toBeTruthy();
    });
  });
  describe("createUser", () => {
    const { newUser } = mockUsers;
    it("signs up the user", async () => {
      const info = {
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
        password_confirmation: newUser.password,
      };
      const data = await Api.createUser({ info });
      expect(data.status).toEqual("success");
      expect(data.payload.jwt).toBeTruthy();
      expect(data.payload.user).toBeTruthy();
    });
  });
});
