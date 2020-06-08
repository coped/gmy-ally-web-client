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
      id: "1",
    };
    it("returns users show url", () => {
      expect(productionEndpoints.users.show({ id: user.id })).toEqual(
        "https://gympartner.herokuapp.com/api/v1/users/1.json"
      );
    });
    it("returns users create url", () => {
      expect(productionEndpoints.users.create).toEqual(
        "https://gympartner.herokuapp.com/api/v1/users.json"
      );
    });
  });
  describe("exercises", () => {
    const exercise = {
      id: "exercise-name",
    };
    it("returns exercise index url", () => {
      expect(productionEndpoints.exercises.index).toEqual(
        "https://gympartner.herokuapp.com/api/v1/exercises.json"
      );
    });
    it("returns specific exercise url", () => {
      expect(productionEndpoints.exercises.show({ id: exercise.id })).toEqual(
        `https://gympartner.herokuapp.com/api/v1/exercises/${exercise.id}.json`
      );
    });
  });
});
