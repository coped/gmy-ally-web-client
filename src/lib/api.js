import AsyncRequest from "lib/asyncRequest";
import ApiEndpoints from "lib/apiEndpoints";
import Messages from "lib/messages";

// Module that encapsulates all interactions with back-end API

export default (function Api() {
  // Authentication
  const login = async ({ info }) => {
    const userData = { login: info };
    try {
      const response = await AsyncRequest.post({
        path: ApiEndpoints.authentication.login,
        data: userData,
      });
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  // Users
  const showUser = async ({ id, authorization }) => {
    try {
      const response = await AsyncRequest.post({
        path: ApiEndpoints.users.show({ id }),
        authorization,
      });
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  const createUser = async ({ info }) => {
    const userData = { user: info };
    try {
      const response = await AsyncRequest.post({
        path: ApiEndpoints.users.create,
        data: userData,
      });
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  const updateUser = async ({ id, info, authorization }) => {
    const userData = { user: info };
    try {
      const response = await AsyncRequest.patch({
        path: ApiEndpoints.users.update({ id }),
        data: userData,
        authorization,
      });
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  const destroyUser = async ({ id, authorization }) => {
    try {
      const response = await AsyncRequest.destroy({
        path: ApiEndpoints.users.destroy({ id }),
        authorization,
      });
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  // Exercises
  const indexExercises = async () => {
    try {
      const response = await AsyncRequest.get({
        path: ApiEndpoints.exercises.index,
      });
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  const showExercise = async ({ id }) => {
    try {
      const response = await AsyncRequest.get(
        ApiEndpoints.exercises.show({ id })
      );
      return await response.json();
    } catch (error) {
      return handleConnectionError(error);
    }
  };

  return {
    login,
    showUser,
    createUser,
    updateUser,
    destroyUser,
    indexExercises,
    showExercise,
  };
})();

const handleConnectionError = (error) => {
  console.log(error);
  const connectionErrorResponse = {
    status: "error",
    messages: [Messages.connectionError],
  };
  return connectionErrorResponse;
};
