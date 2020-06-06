import ApiEndpoints, { productionEndpoints } from "lib/apiEndpoints";

describe("ApiEndpoints", () => {
  describe("authentication", () => {
    it("returns login url", () => {
      expect(productionEndpoints.authentication.login).toEqual(
        "https://gympartner.herokuapp.com/api/v1/login.json"
      );
    });
    it("returns logout url", () => {
      expect(productionEndpoints.authentication.logout).toEqual(
        "https://gympartner.herokuapp.com/api/v1/logout.json"
      );
    });
  });
  describe("users", () => {
    const user = {
      ID: "1",
    };
    it("returns users show url", () => {
      expect(productionEndpoints.users.show(user.ID)).toEqual(
        "https://gympartner.herokuapp.com/api/v1/users/1.json"
      );
    });
    it("returns users create url", () => {
      expect(productionEndpoints.users.create).toEqual(
        "https://gympartner.herokuapp.com/api/v1/users.json"
      );
    });
    it("returns users update url", () => {
      expect(productionEndpoints.users.update(user.ID)).toEqual(
        "https://gympartner.herokuapp.com/api/v1/users/1.json"
      );
    });
    it("returns users destroy url", () => {
      expect(productionEndpoints.users.destroy(user.ID)).toEqual(
        "https://gympartner.herokuapp.com/api/v1/users/1.json"
      );
    });
  });
});
