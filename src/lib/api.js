import AsyncRequest from "lib/asyncRequest";
import ApiEndpoints from "lib/apiEndpoints";
import Messages from "lib/messages";

// Module that encapsulates all interactions with back-end API

export default (function Api() {
  const handleConnectionError = (error) => {
    console.log(error);
    const connectionErrorResponse = {
      status: "error",
      messages: [Messages.connectionError],
    };
    return connectionErrorResponse;
  };

  // Authentication
  const login = async (credentials) => {
    const userData = { login: credentials };
    try {
      const response = await AsyncRequest.post(
        ApiEndpoints.authentication.login,
        userData
      );
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  // Users
  const showUser = async (token) => {
    try {
      const response = await AsyncRequest.post(ApiEndpoints.users.show, token);
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  const createUser = async (credentials) => {
    const userData = { user: credentials };
    try {
      const response = await AsyncRequest.post(
        ApiEndpoints.users.create,
        userData
      );
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  const destroyUser = async (token, authorization = null) => {
    try {
      const response = await AsyncRequest.destroy(
        ApiEndpoints.users.destroy()
      )
    }
  }

  // Exercises

  const indexExercises = async () => {
    try {
      const response = await AsyncRequest.get(ApiEndpoints.exercises.index);
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  const showExercise = async (id) => {
    try {
      const response = await AsyncRequest.get(ApiEndpoints.exercises.show(id));
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  return { login, showUser, createUser, indexExercises, showExercise };
})();
