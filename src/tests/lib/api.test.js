import Api from "lib/api";

describe("api", () => {
  const userData = {
    email: "first@user.com",
    password: "foobar",
  };
  describe("login", () => {
    it("performs login request", async () => {
      const credentials = {
        email: userData.email,
        password: userData.password,
      };
      const data = await Api.login(credentials);
      expect(data.status).toEqual("success");
      expect(data.payload.jwt).toBeTruthy();
    });

    it("handles api errors from bad requests", async () => {
      const data = await Api.login({ email: userData.email });
      expect(data.status).toEqual("error");
      expect(data.messages).toBeTruthy();
    });
  });
});
