const ApiEndpointsBuilder = ({ environment }) => {
  // Provides API endpoints in the form of a module

  const productionUrl = "https://gympartner.herokuapp.com/api/v1/";
  const developmentUrl = "http://localhost:4000/api/v1/";

  const baseUrl = (() => {
    if (environment === "production") {
      return productionUrl;
    } else if (environment === "development") {
      return developmentUrl;
    } else {
      return process.env.NODE_ENV === "production"
        ? productionUrl
        : developmentUrl;
    }
  })();

  const authentication = {
    login: baseUrl + "login.json",
    logout: baseUrl + "logout.json",
  };

  const users = {
    show: ({ id }) => baseUrl + "users/" + id + ".json",
    create: baseUrl + "users.json",
    update: ({ id }) => baseUrl + "users/" + id + ".json",
    destroy: ({ id }) => baseUrl + "users/" + id + ".json",
  };

  const workouts = {};

  const exercises = {
    index: baseUrl + "exercises.json",
    show: ({ id }) => baseUrl + "exercises/" + id + ".json",
  };

  return { authentication, users, workouts, exercises };
};

const ApiEndpoints = ApiEndpointsBuilder({ environment: null });
const productionEndpoints = ApiEndpointsBuilder({ environment: "production" });
const developmentEndpoints = ApiEndpointsBuilder({
  environment: "development",
});

export { productionEndpoints, developmentEndpoints };
export default ApiEndpoints;
