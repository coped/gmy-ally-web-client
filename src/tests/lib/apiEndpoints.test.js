import { ApiEndpointsBuilder } from "lib/apiEndpoints";

const productionEndpoints = ApiEndpointsBuilder({ env: "production" });

describe("ApiEndpoints", () => {
  describe("authentication", () => {
    it("returns login url", () => {
      expect(productionEndpoints.auth.login.toString()).toEqual(
        "https://gympartner.herokuapp.com/api/v1/login.json"
      );
    });
  });
  describe("users", () => {
    const user = {
      id: "1",
    };
    it("returns users show url", () => {
      expect(
        productionEndpoints.users.show({ id: user.id }).toString()
      ).toEqual(
        `https://gympartner.herokuapp.com/api/v1/users/${user.id}.json`
      );
    });
    it("returns users create url", () => {
      expect(productionEndpoints.users.create.toString()).toEqual(
        "https://gympartner.herokuapp.com/api/v1/users.json"
      );
    });
  });
  describe("exercises", () => {
    const exercise = {
      id: "exercise-name",
    };
    it("returns exercise index url", () => {
      expect(productionEndpoints.exercises.index.toString()).toEqual(
        "https://gympartner.herokuapp.com/api/v1/exercises.json"
      );
    });
    it("returns specific exercise url", () => {
      expect(
        productionEndpoints.exercises.show({ id: exercise.id }).toString()
      ).toEqual(
        `https://gympartner.herokuapp.com/api/v1/exercises/${exercise.id}.json`
      );
    });
  });
});
