const ApiEndpointsBuilder = ({ env }) => {
  // Provides API endpoints as URL objects

  const productionUrl = new URL("https://gympartner.herokuapp.com/api/v1/");
  const developmentUrl = new URL("http://localhost:4000/api/v1/");

  const baseUrl = env === "production" ? productionUrl : developmentUrl;

  const auth = {
    login: new URL("login.json", baseUrl),
  };

  const users = {
    show: ({ id }) => new URL(`users/${id}`, baseUrl),
    create: new URL("users.json", baseUrl),
    update: ({ id }) => new URL(`users/${id}.json`, baseUrl),
    destroy: ({ id }) => new URL(`users/${id}.json`, baseUrl),
  };

  const workouts = {};

  const exercises = {
    index: new URL("exercises.json", baseUrl),
    show: ({ id }) => new URL(`exercises/${id}.json`, baseUrl),
  };

  return { auth, users, workouts, exercises };
};
const ApiEndpoints = ApiEndpointsBuilder({ env: process.env.NODE_ENV });

export default ApiEndpoints;
export { ApiEndpointsBuilder };
