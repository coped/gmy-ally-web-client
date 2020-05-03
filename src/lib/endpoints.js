const ApiEndpoints = (productionEnvironment) => {
  // Provides API endpoints in the form of a module

  const productionUrl = "https://gympartner.herokuapp.com/api/v1/";
  const developmentUrl = "http://localhost:4000/api/v1/";

  const baseUrl = (() => {
    if (productionEnvironment === true) {
      return productionUrl;
    } else if (productionEnvironment === false) {
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
    show: (userID) => baseUrl + "users/" + userID + ".json",
    create: baseUrl + "users.json",
    update: (userID) => baseUrl + "users/" + userID + ".json",
    destroy: (userID) => baseUrl + "users/" + userID + ".json",
  };

  const workouts = {};

  const exercises = {
    index: baseUrl + "exercises.json",
    show: (exerciseName) => baseUrl + "exercises/" + exerciseName + ".json",
  };

  return { authentication, users, workouts, exercises };
};

const endpoints = ApiEndpoints();
const productionEndpoints = ApiEndpoints(true);
const developmentEndpoints = ApiEndpoints(false);

export { endpoints, productionEndpoints, developmentEndpoints };
