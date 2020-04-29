const ApiEndpoints = (production = true) => {
    const productionUrl = "https://gympartner.herokuapp.com/api/v1/";
    const developmentUrl = "http://localhost:4000/api/v1/";

    const baseUrl = (production) ? productionUrl : developmentUrl;

    const authentication = {
        login: baseUrl + "login.json",
        logout: baseUrl + "logout.json"
    }

    const users = {
        show: (userID) => baseUrl + "users/" + userID + ".json",
        create: baseUrl + "users.json",
        update: (userID) => baseUrl + "users/" + userID + ".json",
        destroy: (userID) => baseUrl + "users/" + userID + ".json"
    }

    const workouts = {

    }

    const exercises = {
        index: baseUrl + "exercises.json",
        show: (exerciseName) => baseUrl + "exercises/" + exerciseName + ".json"
    }

    return { authentication, users, workouts, exercises }
};

const productionEndpoints = ApiEndpoints();
const developmentEndpoints = ApiEndpoints(false);

export { productionEndpoints, developmentEndpoints };